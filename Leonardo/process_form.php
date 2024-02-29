<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate email field
    $email = $_POST["email"] ?? "";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address";
    } else {
        // Save form data to a text file
        $data = "Email: $email\n";
        $file = fopen("form_data.txt", "a"); // Open file in append mode
        fwrite($file, $data);
        fclose($file);

        echo "Form data saved successfully!";
    }
} else {
    // Redirect back to the form if accessed directly without submission
    header("Location: your_form_page.html");
    exit();
}
?>
