<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $loanAmount = htmlspecialchars($_POST['loan_amount']);
    $disbursementLocation = htmlspecialchars($_POST['disbursement_location']);
    $applicantName = htmlspecialchars($_POST['applicant_name']);
    $applicantEmail = htmlspecialchars($_POST['applicant_email']);

    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Loan Application";
    $message = "Loan Amount: $loanAmount\n" .
               "Disbursement Location: $disbursementLocation\n" .
               "Applicant Name: $applicantName\n" .
               "Applicant Email: $applicantEmail\n";

    $headers = "From: $applicantEmail";

    if (mail($to, $subject, $message, $headers)) {
        echo "Loan application submitted successfully.";
    } else {
        echo "There was an error submitting your application. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>