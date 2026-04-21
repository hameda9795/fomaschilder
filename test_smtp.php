<?php
// TEST: SMTP verbinding checken

require_once 'smtp_mailer.php';

$smtp = new SMTPMailer(
    'mail.mijndomein.nl',
    465,
    'test@fomaschilder.nl',
    '102067438Gerd.com'
);

$result = $smtp->send(
    'hameda9795@gmail.com',
    'TEST SMTP Foma',
    "Dit is een testbericht van de SMTP mailer.\n\nAls je dit leest, werkt het!",
    'FOMA Test',
    'test@fomaschilder.nl'
);

echo "<h1>SMTP Test Resultaat</h1>";
echo "<p><strong>Resultaat:</strong> " . ($result ? "SUCCES ✅" : "MISLUKT ❌") . "</p>";

if (!$result) {
    echo "<p><strong>Foutmelding:</strong> " . htmlspecialchars($smtp->getError()) . "</p>";
}

// Ook testen of we SSL kunnen gebruiken
echo "<hr><h2>Technische info</h2>";
echo "<p>PHP versie: " . phpversion() . "</p>";
echo "<p>OpenSSL enabled: " . (extension_loaded('openssl') ? "JA ✅" : "NEE ❌") . "</p>";
echo "<p>SMTP server: mail.mijndomein.nl:465 (SSL)</p>";

?>