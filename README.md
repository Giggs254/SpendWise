# SpendWise - Budget Tracker

## Project Description

SpendWise is a simple budget tracker webpage designed to help users record and view their daily expenses. The project was built using HTML and CSS, with a JavaScript file connected for future functionality.

## Features

### 1. Expense Form

The **Add Expense** section allows users to enter:

* Expense name
* Amount
* Expense category

The category is selected from a dropdown containing:

* Food
* Transport
* Rent
* Entertainment
* Other

The **Add Expense** button is currently set up but does not add expenses yet. JavaScript functionality will be added in a later stage.

### 2. Expense Table

The **Your Expenses** section displays sample expense records in a structured table.

The table contains:

* Expense Name
* Amount
* Category
* Date

Five sample expenses have been included to demonstrate how the tracker works.

### 3. Logo and Multimedia

A SpendWise logo is displayed near the main heading.

A YouTube video about budgeting and the 50/30/20 money management rule is also embedded on the page using an iframe.

### 4. Interactive Elements

The project includes a collapsible **How to use this tracker** section using the HTML `<details>` and `<summary>` elements.

The table rows also change their background color when the mouse moves over them. The Add Expense button uses a pointer cursor to show that it is clickable.

### 5. Advanced CSS Selectors

The stylesheet demonstrates several advanced CSS selectors, including:

* Descendant selector
* Direct child selector
* `:nth-child()` position pseudo-class
* `:not()` negation pseudo-class
* `:focus` state

These selectors help improve the appearance and user interaction of the webpage.

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Files

```text
SpendWise/
├── index.html
├── style.css
├── script.js
├── Logo.png
└── README.md
```

## Future Improvements

In the next stage, JavaScript can be used to make the Add Expense button functional. Users will be able to enter an expense and have it automatically added to the expense table.

## Author

Ian Giggs Okochi
