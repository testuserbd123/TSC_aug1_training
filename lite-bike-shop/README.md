# Lite Bike Shop

This is a super lightweight e-commerce website for training purposes, focused on selling bikes. The site includes a dummy checkout process and is designed to be easy to edit for adding pixel codes.

## Project Structure

```
lite-bike-shop
├── public
│   └── index.html
├── src
│   ├── products.html
│   ├── checkout.html
│   ├── success.html
│   └── styles.css
├── netlify.toml
└── README.md
```

## Files Overview

- **public/index.html**: The main entry point of the website. It links to the product page, checkout page, and success page, as well as the CSS file for styling.
  
- **src/products.html**: Displays a list of bikes available for sale, including their name, description, price, and an "Add to Cart" button. The code is simple and easy to edit for adding pixel codes.

- **src/checkout.html**: Contains a dummy checkout form for users to enter their details to simulate a purchase. It includes fields for name, email, and address, along with a "Submit" button.

- **src/success.html**: Shown after a successful checkout, thanking the user for their purchase with a simple message.

- **src/styles.css**: Contains basic styles for the website. The CSS is minimal and straightforward, ensuring that the pages remain light and easy to modify.

- **netlify.toml**: Configuration settings for deploying the site on Netlify, specifying build settings and redirects if necessary.

## Deployment Instructions

1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Deploy the site on Netlify by connecting your GitHub repository or by dragging and dropping the project folder into the Netlify dashboard.
4. Ensure that the necessary build settings are configured in the `netlify.toml` file.

## Notes

This project is intended for training and practice purposes. Feel free to modify the code as needed to add tracking pixels or other features.