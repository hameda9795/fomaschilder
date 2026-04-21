<?php

require_once 'smtp_mailer.php';

// -----------------------------
// 1. HONEYPOT CHECK (anti-spam)
// -----------------------------
if (isset($_POST['website']) && $_POST['website'] !== '') {
    exit;
}

// -----------------------------
// 2. VERPLICHTE VELDEN CONTROLEREN
// -----------------------------
$naam            = trim($_POST['naam'] ?? '');
$telefoonnr      = trim($_POST['telefoonnr'] ?? '');
$email           = trim($_POST['email'] ?? '');
$offerteAanvraag = trim($_POST['offerteAanvraag'] ?? '');

if ($naam === '' || $telefoonnr === '' || $email === '' || $offerteAanvraag === '') {
    echo "<script>alert('Er ontbreken verplichte velden.'); window.history.back();</script>";
    exit;
}

// -----------------------------
// 3. E-MAIL VALIDATIE
// -----------------------------
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<script>alert('Ongeldig e-mailadres.'); window.history.back();</script>";
    exit;
}

// -----------------------------
// 4. MAILTEKSTEN
// -----------------------------
$tekst = 
"Nieuwe offerte-aanvraag:\n\n" .
"Naam: $naam\n" .
"Telefoon: $telefoonnr\n" .
"Email: $email\n\n" .
"Aanvraag:\n$offerteAanvraag\n";

$tekst_terug = 
"Beste $naam,\n\n" .
"Bedankt voor uw interesse in FOMA Schildersbedrijf. Hieronder vindt u een kopie van uw aanvraag:\n\n" .
"Naam: $naam\n" .
"Telefoon: $telefoonnr\n" .
"Email: $email\n\n" .
"Aanvraag:\n$offerteAanvraag\n\n" .
"Ik neem zo snel mogelijk contact met u op.\n\n" .
"Met vriendelijke groet,\n" .
"Hassan Shayesteh\n" .
"FOMA Schildersbedrijf";

// -----------------------------
// 5. SMTP INSTELLINGEN MIJNDOMEIN
// -----------------------------
$smtp_wachtwoord = 'foma1340';

$smtp = new SMTPMailer(
    'mail.mijndomein.nl',
    465,
    'info@fomaschilder.nl',
    $smtp_wachtwoord
);

// -----------------------------
// 6. MAIL VERSTUREN VIA SMTP
// -----------------------------
$fromName  = 'FOMA Schildersbedrijf';
$fromEmail = 'info@fomaschilder.nl';  // Match ba SMTP username

// Email 1: naar info@fomaschilder.nl (hoofd email)
$result1 = $smtp->send(
    'info@fomaschilder.nl',
    'Nieuwe offerte-aanvraag',
    $tekst,
    $fromName,
    $fromEmail
);

// Email 2: naar Mahin1348@gmail.com
$result2 = $smtp->send(
    'Mahin1348@gmail.com',
    'Nieuwe offerte-aanvraag',
    $tekst,
    $fromName,
    $fromEmail
);

// Email 3: kopie naar de klant
$result3 = $smtp->send(
    $email,
    'Kopie van uw aanvraag',
    $tekst_terug,
    $fromName,
    $fromEmail
);

// DEBUG
$debug = "Tijd: " . date('Y-m-d H:i:s') . "\n";
$debug .= "Mail 1 (info@fomaschilder.nl): " . ($result1 ? "SUCCES" : "MISLUKT") . "\n";
$debug .= "Mail 2 (Mahin1348@gmail.com): "     . ($result2 ? "SUCCES" : "MISLUKT") . "\n";
$debug .= "Mail 3 (klant $email): "            . ($result3 ? "SUCCES" : "MISLUKT") . "\n";
if (!$result1 || !$result2 || !$result3) {
    $debug .= "SMTP fout: " . $smtp->getError() . "\n";
}
$debug .= "------------------------------\n";
file_put_contents("maildebug.txt", $debug, FILE_APPEND);

// -----------------------------
// 7. DOORSTUREN NAAR BEDANKPAGINA
// -----------------------------
if ($result1 && $result2 && $result3) {
    echo "<script>window.location.href='Offerte_terug.html';</script>";
} else {
    echo "<script>alert('Er is een fout opgetreden bij het versturen van de e-mail. Probeer het later opnieuw.'); window.history.back();</script>";
}
exit;

?>