# SpendWise - Budget Tracker

## Project Description

SpendWise is a personal budget tracking webpage designed to help users record, view, organize, and process their daily expenses.

The project is developed as a responsive dashboard application using **HTML5, CSS3, and JavaScript**.

The current version builds on the **SpendWise Dashboard Shell** by adding JavaScript interactivity. JavaScript is used to store application data, collect user input, perform calculations, make budget decisions, update the webpage dynamically, and respond to user actions.

The dashboard uses modern CSS techniques including **CSS Grid, Flexbox, CSS Custom Properties, responsive media queries, and micro-interactions**.

---

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

The dashboard provides the main visual interface for the budgeting application.

---

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

---

### 3. Dashboard Header

The dashboard header displays important financial information and branding.

It includes:

* Welcome message
* Dashboard title
* Available balance
* Budget status message
* SpendWise logo

The available balance is updated dynamically by JavaScript whenever expense information changes.

---

### 4. Financial Category Cards

The dashboard contains six financial category cards:

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

The category cards are arranged using CSS Grid.

JavaScript dynamically calculates and updates the amount displayed for each category based on the stored expense data.

---

### 5. Card Micro-interactions

The financial category cards include subtle hover and keyboard focus effects.

The interactions use:

* `transform`
* `box-shadow`
* CSS transitions

The animation duration is **200ms**, which is within the required maximum of 250ms.

The cards respond to:

* Mouse hover
* Keyboard focus

The cards use `tabindex="0"` to allow keyboard navigation.

---

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

The form uses JavaScript to collect and validate the user's input.

When a valid expense is submitted, the expense is added to the application data and the dashboard is updated automatically.

---

### 7. Input Validation

JavaScript validates the information entered into the expense form before adding an expense.

The application checks that:

* The expense name is not empty.
* The expense amount is greater than zero.
* The expense amount is a valid number.
* An expense category has been selected.

If invalid information is entered, an error message is displayed to the user.

For example:

```text
Please enter an expense name.
```

or:

```text
Please enter a valid expense amount.
```

This prevents invalid expense information from being added to the application.

---

### 8. Dynamic Expense Table

The **Your Expenses** section displays expense records in a structured table.

The table contains:

* Expense Name
* Amount
* Category
* Date

The expense table is generated dynamically using JavaScript.

When the page loads, JavaScript displays the expenses stored in the `expenses` array.

When the user adds a new expense, the table is refreshed automatically and the new expense appears in the table.

The table therefore reflects the current application data rather than relying only on static HTML rows.

---

### 9. Adding New Expenses

The Add Expense form is connected to a JavaScript `submit` event listener.

When the user submits the form:

1. The default form submission is prevented.
2. The expense name is collected.
3. The amount is converted into a number.
4. The selected category is collected.
5. The input is validated.
6. A new expense object is created.
7. The object is added to the `expenses` array.
8. The expense table is updated.
9. The budget balance is recalculated.
10. The category cards are updated.
11. A success or warning message is displayed.
12. The form is reset.

This connects the user's action directly to changes in the dashboard.

---

### 10. Budget Status and Decision Making

SpendWise uses JavaScript conditional statements to determine the user's budget status.

The application compares the remaining balance against different budget conditions.

The logic includes:

* Budget exceeded
* Budget completely used
* Less than 20% of the budget remaining
* User is still within the budget

The application displays appropriate feedback such as:

```text
⚠️ You have exceeded your monthly budget.
```

```text
⚠️ Your monthly budget has been fully used.
```

```text
⚠️ Warning: You have less than 20% of your budget remaining.
```

```text
✅ You are within your monthly budget.
```

This demonstrates JavaScript **decision making using `if`, `else if`, and `else` statements**.

---

### 11. Application Data and Variables

Variables are used to store important budgeting and expense information.

The monthly budget is stored using:

```javascript
let monthlyBudget = 50000;
```

The expense records are stored in an array of objects:

```javascript
let expenses = [
    {
        name: "Lunch",
        amount: 350,
        category: "Food",
        date: "05 Sep 2026"
    },
    {
        name: "Bus Fare",
        amount: 100,
        category: "Transport",
        date: "05 Sep 2026"
    }
];
```

Each expense object contains:

* Expense name
* Amount
* Category
* Date

Variables are also used to store calculated values such as:

* Total expenses
* Remaining balance
* Expense amount
* Selected category
* Budget status

---

### 12. JavaScript Data Types

The project demonstrates several JavaScript data types.

Examples include:

**Number**

```javascript
let monthlyBudget = 50000;
```

**String**

```javascript
let expenseName = "Lunch";
```

**Array**

```javascript
let expenses = [];
```

**Object**

```javascript
let newExpense = {
    name: expenseName,
    amount: expenseAmount,
    category: expenseCategory,
    date: "05 Sep 2026"
};
```

These data types allow SpendWise to store and process different types of application information.

---

### 13. User Input

SpendWise collects the user's monthly budget using the JavaScript `prompt()` function:

```javascript
let userBudget = prompt(
    "Enter your monthly budget in KSh:"
);
```

The entered value is converted into a number using `Number()`:

```javascript
monthlyBudget = Number(userBudget);
```

The expense form also collects user input through HTML form controls:

```javascript
let expenseName = expenseNameInput.value.trim();

let expenseAmount = Number(
    expenseAmountInput.value
);

let expenseCategory = expenseCategoryInput.value;
```

This allows user-entered information to be processed by JavaScript.

---

### 14. Budget Calculations

SpendWise calculates the total amount spent using the `calculateTotalExpenses()` function:

```javascript
function calculateTotalExpenses(expenses) {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}
```

The remaining balance is calculated using:

```javascript
function calculateRemainingBalance(budget, expenses) {
    let totalExpenses =
        calculateTotalExpenses(expenses);

    return budget - totalExpenses;
}
```

The calculation follows:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

For example:

```text
Monthly Budget: KSh 50,000
Total Expenses: KSh 14,750
Remaining Balance: KSh 35,250
```

---

### 15. Arrays and Loops

The `expenses` array stores multiple expense objects.

JavaScript `for...of` loops are used to process the expense records.

For example:

```javascript
for (let expense of expenses) {
    total += expense.amount;
}
```

Loops are also used when:

* Calculating total expenses
* Calculating category totals
* Displaying expenses in the table
* Updating category cards

This demonstrates how arrays and loops can be used to process application data.

---

### 16. Reusable Functions

SpendWise uses reusable functions to organize the JavaScript code.

Important functions include:

```text
calculateTotalExpenses()
calculateRemainingBalance()
checkBudgetStatus()
updateBudgetSummary()
displayBudgetStatus()
calculateCategoryTotal()
updateCategoryCards()
displayExpenses()
showMessage()
```

Each function performs a specific task.

Using functions makes the application easier to:

* Understand
* Maintain
* Test
* Reuse
* Extend

---

### 17. DOM Manipulation

JavaScript uses the **Document Object Model (DOM)** to interact with the HTML page.

Elements are selected using methods such as:

```javascript
document.getElementById()
```

and:

```javascript
document.querySelector()
```

JavaScript dynamically changes webpage content using properties such as:

```javascript
textContent
```

For example, the available balance is updated using:

```javascript
balanceDisplay.textContent =
    "KSh " + remainingBalance.toLocaleString();
```

The expense table is also dynamically generated using:

```javascript
document.createElement("tr");
```

and:

```javascript
appendChild()
```

This allows the webpage to change without manually editing the HTML every time an expense is added.

---

### 18. Event Listeners

SpendWise uses an event listener to respond to the expense form submission.

The application uses:

```javascript
expenseForm.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        // Expense processing
    }
);
```

The event listener connects the user's **Add Expense** action to the JavaScript logic.

This demonstrates the use of JavaScript **event-driven programming**.

---

### 19. Dynamic Category Calculations

SpendWise calculates spending for individual categories.

The `calculateCategoryTotal()` function checks each expense and adds the amount when the category matches:

```javascript
function calculateCategoryTotal(category) {
    let total = 0;

    for (let expense of expenses) {
        if (expense.category === category) {
            total += expense.amount;
        }
    }

    return total;
}
```

The category cards are then updated using:

```javascript
updateCategoryCards();
```

Therefore, adding a new Food expense, for example, updates the Food category amount automatically.

---

### 20. User Feedback Messages

SpendWise provides feedback after the user interacts with the expense form.

The `showMessage()` function updates the message displayed below the form:

```javascript
function showMessage(message, type) {
    let messageElement =
        document.getElementById("form-message");

    if (!messageElement) return;

    messageElement.textContent = message;

    messageElement.className =
        "form-message " + type;
}
```

Messages can communicate:

* Successful expense addition
* Invalid input
* Budget warnings

This improves the user's interaction with the application.

---

### 21. Console Output

SpendWise also displays budgeting information in the browser console.

The `updateBudgetSummary()` function outputs:

```javascript
console.log(
    "Monthly Budget: KSh " + monthlyBudget
);

console.log(
    "Total Expenses: KSh " + totalSpent
);

console.log(
    "Remaining Balance: KSh " + remainingBalance
);
```

The browser console can be opened using the browser's Developer Tools.

---

## CSS Grid and Flexbox

The dashboard uses modern CSS layout techniques.

### CSS Grid

CSS Grid is used for:

* Overall dashboard structure
* Sidebar and main content layout
* Financial category cards

Example:

```css
.dashboard {
    display: grid;
    grid-template-columns: var(--sidebar-width) 1fr;
}
```

The category cards also use CSS Grid:

```css
.category-grid {
    display: grid;
    grid-template-columns:
        repeat(3, minmax(0, 1fr));
}
```

### Flexbox

Flexbox is used for:

* Header content
* Sidebar branding
* Navigation items
* Category cards
* Card content
* Form layout
* Balance information

No absolute positioning is used for the page layout.

---

## CSS Custom Properties

The application's color palette is defined using CSS Custom Properties inside the `:root` selector.

Examples include:

```css
:root {
    --brand-color: #1e293b;
    --accent-color: #16a34a;
    --surface-color: #ffffff;
    --background-color: #f8fafc;
    --primary-text-color: #1e293b;
    --secondary-text-color: #64748b;
    --border-color: #e2e8f0;
}
```

Using CSS variables makes the design easier to maintain and allows the application's theme to be changed consistently.

---

## Responsive Design

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
* Budget status alignment is adjusted.

The responsive layout can be verified using the browser's **DevTools Device Toolbar**.

---

## Dark Theme

SpendWise supports the user's system color preference.

A dark theme is implemented using:

```css
@media (prefers-color-scheme: dark)
```

The dark theme overrides the CSS Custom Properties defined in `:root`, allowing the dashboard to display a darker color scheme while maintaining the same layout.

---

## Logo and Multimedia

A SpendWise logo is displayed in:

* The dashboard sidebar
* The dashboard header

A YouTube video about budgeting and the **50/30/20 money management rule** is also embedded using an iframe.

---

## Interactive HTML Elements

The project includes a collapsible **How to use this tracker** section using the HTML:

```html
<details>
    <summary>How to use this tracker</summary>
</details>
```

Other interactive elements include:

* Add Expense form
* Form validation
* Dynamic expense table
* Dynamic category cards
* Budget status messages
* Button hover and focus states
* Navigation hover and active states
* Category card hover and keyboard focus effects

---

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* CSS Media Queries
* JavaScript
* DOM Manipulation
* JavaScript Event Listeners
* Google Fonts

---

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

Contains the structure of the SpendWise dashboard, including the sidebar, header, financial category cards, expense form, dynamic expense table, instructions, and budgeting video. It also links the JavaScript file to the webpage.

**`style.css`**

Contains the visual design and layout of the SpendWise dashboard, including CSS Grid, Flexbox, CSS Custom Properties, responsive design, card micro-interactions, form feedback messages, and dark theme support.

**`script.js`**

Contains the JavaScript logic for storing budgeting data, collecting user input, validating expenses, performing calculations, making budget decisions, manipulating the DOM, handling events, updating category totals, and displaying feedback.

**`Logo.png`**

Contains the SpendWise application logo used in the dashboard.

**`README.md`**

Contains documentation explaining the SpendWise project, its features, technologies, JavaScript concepts, file structure, and current functionality.

---

## Current Project Status

The current version combines the **SpendWise Dashboard Shell** with an interactive JavaScript budgeting system.

The dashboard provides the visual structure and responsive interface, while JavaScript now connects user actions to the application's data and interface.

The current JavaScript functionality includes:

* Storing monthly budget data
* Storing expense data using arrays and objects
* Collecting the user's monthly budget
* Collecting expense information from the form
* Validating user input
* Converting input values into numbers
* Calculating total expenses
* Calculating remaining balance
* Checking budget conditions
* Making budget decisions using conditional statements
* Adding new expenses to the array
* Dynamically displaying expenses
* Dynamically updating category totals
* Updating the available balance
* Displaying budget status messages
* Displaying success, error, and warning messages
* Using DOM manipulation
* Using event listeners
* Displaying budgeting results in the browser console

The application now provides a functional foundation for further development.

---

## Future Improvements

Future versions of SpendWise can include:

* Local Storage for saving expenses between browser sessions
* Database integration
* User authentication
* Financial reports
* Interactive financial charts
* Savings goals
* Advanced category spending analysis
* Monthly and yearly spending reports
* Expense editing and deletion
* Budget history
* Additional dashboard statistics
* Backend API integration
* Django backend integration

---

## Author

**Ian Giggs Okochi**
