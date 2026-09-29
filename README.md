Below is the complete `README.md`, ready to replace your current README. It preserves your existing project documentation while adding the JavaScript requirements for this week's assignment.

# SpendWise - Budget Tracker

## Project Description

SpendWise is a personal budget tracking webpage designed to help users record, view, organize, and process their daily expenses.

The project has been developed as a responsive dashboard interface using **HTML5, CSS3, and JavaScript**.

The current stage builds on the **SpendWise Dashboard Shell** by adding the JavaScript foundation required to process basic budgeting information. The dashboard uses modern CSS techniques including **CSS Grid, Flexbox, CSS Custom Properties, responsive media queries, and card micro-interactions**.

JavaScript is used to store application data, collect the user's monthly budget, perform budget calculations, organize logic using reusable functions, and display calculated results in the browser console.

The financial information displayed on the dashboard includes realistic static content, while JavaScript is used to process budgeting and expense data.

## Features

### 1. Dashboard Layout

The SpendWise dashboard uses a modern dashboard structure consisting of:

* Sidebar/navigation menu
* Dashboard header
* Financial overview section
* Six financial category cards
* Add Expense section
* Expense table
* Instructions section
* Budgeting tips section

The dashboard provides the visual foundation for SpendWise functionality.

### 2. Sidebar Navigation

The sidebar provides navigation options for the SpendWise dashboard.

It contains:

* Dashboard
* Expenses
* Reports
* Budgets
* Savings
* Settings

The navigation menu is styled using Flexbox and includes hover and active states.

### 3. Dashboard Header

The dashboard header displays important financial information and branding.

It includes:

* Welcome message
* Dashboard title
* Available balance
* SpendWise logo

Flexbox is used to arrange the header content.

### 4. Financial Category Cards

The dashboard contains six financial category cards displaying realistic financial information.

The categories are:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

Each card displays:

* Category name
* Financial amount
* Category status
* Short description
* Category icon

The cards are arranged using CSS Grid.

### 5. Card Micro-interactions

The financial category cards include subtle hover and keyboard focus effects.

The interactions use:

* `transform`
* `box-shadow`

The animation duration is **200ms**, which is within the required maximum of 250ms.

The cards respond to both:

* Mouse hover
* Keyboard focus

The cards use `tabindex="0"` to allow keyboard focus.

### 6. Expense Form

The **Add Expense** section allows users to enter:

* Expense name
* Amount
* Expense category

The category dropdown contains:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities
* Other

The form provides the input structure for collecting expense information.

### 7. Expense Table

The **Your Expenses** section displays sample expense records in a structured table.

The table contains:

* Expense Name
* Amount
* Category
* Date

Sample expenses have been included to demonstrate how the tracker displays financial activity.

### 8. Logo and Multimedia

A SpendWise logo is displayed in the dashboard sidebar and header.

A YouTube video about budgeting and the **50/30/20 money management rule** is also embedded on the page using an iframe.

### 9. Interactive Elements

The project includes a collapsible **How to use this tracker** section using the HTML `<details>` and `<summary>` elements.

The expense table rows also change their background appearance when the mouse moves over them.

Buttons and navigation items include hover and focus states to provide visual feedback.

### 10. CSS Grid and Flexbox

The dashboard uses modern CSS layout techniques.

**CSS Grid** is used for the overall dashboard structure:

* Sidebar
* Main dashboard area

CSS Grid is also used to arrange the financial category cards.

**Flexbox** is used for:

* Header content
* Sidebar branding
* Navigation items
* Dashboard cards
* Card content
* Form layout

No absolute positioning is used for the page layout.

### 11. CSS Custom Properties

The application's color palette is defined using CSS Custom Properties inside the `:root` selector.

The theme includes variables for:

* Brand color
* Accent color
* Surface color
* Background color
* Primary text color
* Secondary text color
* Border color

Using CSS variables makes the design easier to maintain and allows the application's theme to be changed consistently.

### 12. Responsive Design

The dashboard is designed to adapt to different screen sizes.

A responsive media query is used below **768px**:

```css
@media (max-width: 768px)
```

On smaller screens:

* The dashboard changes to a single-column layout.
* The sidebar adapts to the smaller screen.
* Navigation items are reorganized.
* The header changes to a smaller layout.
* Financial category cards are displayed in a single column.
* Content spacing is reduced.
* The expense table can be horizontally scrolled when necessary.

The responsive layout can be verified using the browser's **DevTools Device Toolbar**.

### 13. Dark Theme

As a stretch goal, SpendWise includes support for the user's system color preference.

A dark theme is implemented using:

```css
@media (prefers-color-scheme: dark)
```

The dark theme overrides the CSS Custom Properties defined in `:root`, allowing the dashboard to display a darker color scheme while maintaining the same layout.

### 14. JavaScript Foundation

JavaScript has been added to transform SpendWise from a purely visual application into an application capable of processing budgeting data.

The JavaScript file is linked to the HTML page using:

```html
<script src="script.js"></script>
```

The JavaScript foundation implements the following concepts:

* Variables
* Data types
* Arrays
* Objects
* User input
* Number conversion
* Calculations
* Functions
* Loops
* Console output

These concepts allow SpendWise to store and process basic financial information.

### 15. Application Data and Variables

Variables are used to store important budgeting and expense information.

The monthly budget is stored using a variable:

```javascript
let monthlyBudget = 50000;
```

The `monthlyBudget` variable stores the amount available for the monthly budget.

Expense information is stored in an array containing objects:

```javascript
let expenses = [
    {
        name: "Lunch",
        amount: 350,
        category: "Food"
    },
    {
        name: "Bus Fare",
        amount: 100,
        category: "Transport"
    }
];
```

Each expense object contains:

* Expense name
* Amount
* Category

Variables are also used to store calculated results such as the total amount spent and the remaining balance.

### 16. User Input

SpendWise collects the user's monthly budget using the JavaScript `prompt()` function.

```javascript
let userBudget = prompt(
    "Enter your monthly budget in KSh:"
);
```

The value entered by the user is converted into a number using `Number()`:

```javascript
monthlyBudget = Number(userBudget);
```

This allows the entered budget to be used in mathematical calculations.

### 17. Budget Calculations

SpendWise performs calculations to determine the total amount spent and the remaining budget.

The total expenses are calculated by adding the amount of each expense:

```javascript
function calculateTotalExpenses(expenses) {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}
```

The remaining balance is calculated by subtracting the total expenses from the monthly budget:

```javascript
function calculateRemainingBalance(budget, expenses) {
    let totalExpenses = calculateTotalExpenses(expenses);

    return budget - totalExpenses;
}
```

For example:

```text
Monthly Budget: KSh 50,000
Total Expenses: KSh 14,750
Remaining Balance: KSh 35,250
```

The calculation follows:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

### 18. Reusable Functions

Functions are used to organize the budgeting logic into reusable sections.

The `calculateTotalExpenses()` function calculates the total amount spent from the expense records.

The `calculateRemainingBalance()` function calculates the amount remaining after total expenses have been deducted from the monthly budget.

Using functions helps organize the code by separating different budgeting tasks into reusable blocks. This makes the code easier to understand, maintain, and reuse.

### 19. Console Output

The calculated budgeting results are displayed in the browser console using `console.log()`.

The application displays:

* Monthly Budget
* Total Expenses
* Remaining Balance
* Number of Expenses

Example console output:

```text
========== SpendWise Budget Report ==========
Monthly Budget: KSh 50000
Total Expenses: KSh 14750
Remaining Balance: KSh 35250
Number of Expenses: 5
============================================
```

The browser console can be opened using the browser's Developer Tools.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* CSS Media Queries
* JavaScript
* Google Fonts

## Project Files

```text
SpendWise/

├── index.html
├── style.css
├── script.js
├── Logo.png
└── README.md
```

### File Descriptions

**`index.html`**

Contains the structure of the SpendWise dashboard, including the sidebar, header, financial category cards, expense form, expense table, instructions, and budgeting video. It also links the JavaScript file to the webpage.

**`style.css`**

Contains the visual design and layout of the SpendWise dashboard, including CSS Grid, Flexbox, CSS Custom Properties, responsive design, card micro-interactions, and dark theme support.

**`script.js`**

Contains the JavaScript logic for storing budgeting data, collecting user input, performing calculations, using reusable functions, and displaying budgeting results in the browser console.

**`Logo.png`**

Contains the SpendWise application logo used in the dashboard.

**`README.md`**

Contains documentation explaining the SpendWise project, its features, technologies, JavaScript concepts, file structure, and future development.

## Current Project Status

The current version combines the **SpendWise Dashboard Shell** with the JavaScript foundation.

The dashboard provides the visual structure and responsive interface, while JavaScript now processes basic budgeting data.

The current JavaScript functionality includes:

* Storing monthly budget data
* Storing expense data
* Collecting the user's monthly budget
* Calculating total expenses
* Calculating the remaining balance
* Displaying budgeting results in the browser console

The project can be extended with more advanced dynamic expense management functionality in future stages.

## Future Improvements

Future versions of SpendWise can include:

* Functional Add Expense button
* Dynamic expense table updates
* Dynamic category card updates
* Expense calculations
* Total spending calculations
* Budget tracking
* Category spending analysis
* Interactive financial charts
* Savings goals
* Data persistence
* Local storage or database integration
* User authentication
* Financial reports
* Additional dashboard statistics

## Author

**Ian Giggs Okochi**
