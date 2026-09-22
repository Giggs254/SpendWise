# SpendWise - Budget Tracker

## Project Description

SpendWise is a personal budget tracking webpage designed to help users record, view, and organize their daily expenses.

The project has been developed as a responsive dashboard interface using **HTML5 and CSS3**, with a JavaScript file connected for future functionality.

The current stage focuses on building the **SpendWise Dashboard Shell** as the foundation of the capstone project. The dashboard uses modern CSS techniques including **CSS Grid, Flexbox, CSS Custom Properties, responsive media queries, and card micro-interactions**.

The financial information currently displayed on the dashboard is realistic static content. Functionality will be added in later stages.

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

The dashboard provides the visual foundation for future SpendWise functionality.

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

The dashboard contains six financial category cards displaying realistic static financial information.

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

The **Add Expense** button is currently present as a visual element. JavaScript functionality will be developed in a later stage.

### 7. Expense Table

The **Your Expenses** section displays sample expense records in a structured table.

The table contains:

* Expense Name
* Amount
* Category
* Date

Sample expenses have been included to demonstrate how the tracker will display financial activity.

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

Contains the structure of the SpendWise dashboard, including the sidebar, header, financial category cards, expense form, expense table, instructions, and budgeting video.

**`style.css`**

Contains the visual design and layout of the SpendWise dashboard, including CSS Grid, Flexbox, CSS Custom Properties, responsive design, card micro-interactions, and dark theme support.

**`script.js`**

Contains the JavaScript file connected to the project. Additional functionality will be implemented in future stages.

**`Logo.png`**

Contains the SpendWise application logo used in the dashboard.

**`README.md`**

Contains documentation explaining the SpendWise project, its features, technologies, file structure, and future development.

## Current Project Status

The current version focuses on the **SpendWise Dashboard Shell** and its visual structure.

The dashboard currently uses static financial information and does not yet provide dynamic expense management functionality.

The project is ready to be extended with JavaScript functionality in future development stages.

## Future Improvements

Future versions of SpendWise can include:

* Functional Add Expense button
* Dynamic expense table updates
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
