<?php

class SMTPMailer {
    private $host;
    private $port;
    private $username;
    private $password;
    private $socket;
    private $error;

    public function __construct($host, $port, $username, $password) {
        $this->host     = $host;
        $this->port     = $port;
        $this->username = $username;
        $this->password = $password;
    }

    public function getError() {
        return $this->error;
    }

    private function connect() {
        $address = 'ssl://' . $this->host . ':' . $this->port;
        $this->socket = @stream_socket_client($address, $errno, $errstr, 15);

        if (!$this->socket) {
            $this->error = "Kan geen verbinding maken met SMTP server: $errstr ($errno)";
            return false;
        }

        stream_set_timeout($this->socket, 15);

        if (!$this->checkResponse('220')) {
            $this->error = "SMTP server gaf geen 220 antwoord.";
            return false;
        }

        return true;
    }

    private function sendCommand($command, $expectedCode = null) {
        fwrite($this->socket, $command . "\r\n");

        if ($expectedCode) {
            return $this->checkResponse($expectedCode);
        }
        return true;
    }

    private function checkResponse($expectedCode) {
        $response = '';
        $startTime = time();
        $lastLine = '';

        while (true) {
            if (time() - $startTime > 15) {
                $this->error = "SMTP timeout bij wachten op antwoord.";
                return false;
            }

            $line = @fgets($this->socket, 512);
            if ($line === false) {
                $this->error = "SMTP connectie verbroken.";
                return false;
            }

            $lastLine = $line;
            $response .= $line;

            // SMTP multi-line: last line starts with "CODE " (space), not "CODE-"
            if (strpos($line, $expectedCode . ' ') === 0) {
                break;
            }
            // Single line response also acceptable
            if (strpos($line, $expectedCode) === 0 && strpos($line, '-') !== strlen($expectedCode)) {
                break;
            }
        }

        if (strpos($lastLine, $expectedCode) === 0) {
            return true;
        }

        $this->error = "SMTP fout: " . trim($lastLine);
        return false;
    }

    public function send($to, $subject, $body, $fromName, $fromEmail) {
        if (!$this->connect()) {
            return false;
        }

        // EHLO
        if (!$this->sendCommand('EHLO ' . $this->host, '250')) {
            fclose($this->socket);
            return false;
        }

        // AUTH LOGIN
        if (!$this->sendCommand('AUTH LOGIN', '334')) {
            fclose($this->socket);
            return false;
        }

        // Username (base64)
        if (!$this->sendCommand(base64_encode($this->username), '334')) {
            fclose($this->socket);
            return false;
        }

        // Password (base64)
        if (!$this->sendCommand(base64_encode($this->password), '235')) {
            fclose($this->socket);
            return false;
        }

        // MAIL FROM
        if (!$this->sendCommand('MAIL FROM:<' . $fromEmail . '>', '250')) {
            fclose($this->socket);
            return false;
        }

        // RCPT TO
        if (!$this->sendCommand('RCPT TO:<' . $to . '>', '250')) {
            fclose($this->socket);
            return false;
        }

        // DATA
        if (!$this->sendCommand('DATA', '354')) {
            fclose($this->socket);
            return false;
        }

        // Build message
        $headers = "From: " . $fromName . " <" . $fromEmail . ">\r\n";
        $headers .= "To: " . $to . "\r\n";
        $headers .= "Subject: " . $subject . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "Content-Transfer-Encoding: 7bit\r\n";
        $headers .= "X-Mailer: PHP/SMTP\r\n";

        $message = $headers . "\r\n" . $body;

        // End with dot on its own line
        $message = str_replace("\r\n.\r\n", "\r\n..\r\n", $message);
        if (substr($message, -1) === "\n" && substr($message, -2) !== "\r\n") {
            $message = substr($message, 0, -1) . "\r\n";
        }
        if (substr($message, -2) !== "\r\n") {
            $message .= "\r\n";
        }

        fwrite($this->socket, $message . ".\r\n");

        if (!$this->checkResponse('250')) {
            fclose($this->socket);
            return false;
        }

        // QUIT
        $this->sendCommand('QUIT');
        fclose($this->socket);

        return true;
    }
}

?>