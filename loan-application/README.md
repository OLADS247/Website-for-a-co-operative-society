# Loan Application Project

This project is a web-based loan application system that allows users to submit their loan details through a form. The application is structured into several components, each serving a specific purpose.

## Project Structure

```
loan-application
├── src
│   ├── apply.html        # HTML form for loan application
│   ├── css
│   │   └── styles.css    # CSS styles for the application form
│   └── js
│       └── main.js       # JavaScript for form validation and submission
├── server
│   └── send_email.php    # PHP script to process form submissions and send emails
└── README.md             # Documentation for the project
```

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Install Dependencies**: 
   Ensure you have a local server environment set up (e.g., XAMPP, WAMP) to run the PHP script.

3. **Configure Email Settings**: 
   Open `server/send_email.php` and configure the email settings to specify the recipient email address.

4. **Open the Application**: 
   Navigate to the `src` directory and open `apply.html` in your web browser to access the loan application form.

## Usage Guidelines

- Fill in the required fields in the loan application form, including the loan amount and disbursement location.
- Click the submit button to send your application.
- Upon submission, the details will be sent to the specified email address.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.