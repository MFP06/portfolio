<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if ( empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message) ) {
        http_response_code(400);
        echo "Veuillez remplir correctement tous les champs.";
        exit;
    }

    $recipient = "m.falcomer06@gmail.com";  // Remplace par ton adresse mail
    $subject = "Nouveau message de $name via portfolio";

    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Merci, votre message a bien été envoyé !";
    } else {
        http_response_code(500);
        echo "Oops! Une erreur est survenue, veuillez réessayer.";
    }

} else {
    http_response_code(403);
    echo "Méthode non autorisée.";
}
?>
