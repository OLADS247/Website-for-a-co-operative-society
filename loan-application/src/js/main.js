// This file contains JavaScript code for handling the loan application form submission and validation.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const loanAmount = document.querySelector('#loanAmount').value;
        const disbursementLocation = document.querySelector('#disbursementLocation').value;

        // Basic validation
        if (!loanAmount || !disbursementLocation) {
            alert('Please fill in all fields.');
            return;
        }

        // Prepare data for submission
        const formData = new FormData();
        formData.append('loanAmount', loanAmount);
        formData.append('disbursementLocation', disbursementLocation);

        // Send the form data to the server
        fetch('../server/send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Application submitted successfully!');
            form.reset(); // Reset the form fields
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your application. Please try again.');
        });
    });
});