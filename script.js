let monthlyBudget = 50000;

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
    },
    {
        name: "House Rent",
        amount: 12000,
        category: "Rent",
        date: "01 Sep 2026"
    },
    {
        name: "Movie",
        amount: 800,
        category: "Entertainment",
        date: "03 Sep 2026"
    },
    {
        name: "Groceries",
        amount: 1500,
        category: "Food",
        date: "04 Sep 2026"
    }
];


// ==========================================
// 2. DOM ELEMENTS
// ==========================================

const expenseForm = document.querySelector("form");

const expenseNameInput =
    document.getElementById("expense-name");

const expenseAmountInput =
    document.getElementById("expense-amount");

const expenseCategoryInput =
    document.getElementById("expense-category");

const expenseTableBody =
    document.querySelector(".expense-table tbody");

const balanceDisplay =
    document.querySelector(".balance-info strong");

const categoryCards =
    document.querySelectorAll(".category-card");


// ==========================================
// 3. CALCULATE TOTAL EXPENSES
// ==========================================

function calculateTotalExpenses(expenses) {

    let total = 0;

    // Loop through all expense records
    for (let expense of expenses) {

        total += expense.amount;
    }

    return total;
}


// ==========================================
// 4. CALCULATE REMAINING BALANCE
// ==========================================

function calculateRemainingBalance(budget, expenses) {

    let totalExpenses =
        calculateTotalExpenses(expenses);

    return budget - totalExpenses;
}


// ==========================================
// 5. DECISION MAKING
// ==========================================

function checkBudgetStatus() {

    let totalSpent =
        calculateTotalExpenses(expenses);

    let remainingBalance =
        monthlyBudget - totalSpent;

    // Use conditional statements
    // to evaluate the budget situation

    if (remainingBalance < 0) {

        return "⚠️ You have exceeded your monthly budget.";

    } else if (remainingBalance === 0) {

        return "⚠️ Your monthly budget has been fully used.";

    } else if (remainingBalance <= monthlyBudget * 0.2) {

        return "⚠️ Warning: You have less than 20% of your budget remaining.";

    } else {

        return "✅ You are within your monthly budget.";
    }
}


// ==========================================
// 6. DISPLAY BUDGET STATUS
// ==========================================

function displayBudgetStatus() {

    const statusElement =
        document.getElementById("budget-status");

    if (!statusElement) {
        return;
    }

    statusElement.textContent =
        checkBudgetStatus();
}


// ==========================================
// 7. UPDATE BUDGET SUMMARY
// ==========================================

function updateBudgetSummary() {

    let totalSpent =
        calculateTotalExpenses(expenses);

    let remainingBalance =
        calculateRemainingBalance(
            monthlyBudget,
            expenses
        );

    // Update the balance directly on the webpage
    if (balanceDisplay) {

        balanceDisplay.textContent =
            "KSh " + remainingBalance.toLocaleString();
    }

    // Update budget message
    displayBudgetStatus();

    // Console output for testing
    console.log("========== SpendWise Budget Report ==========");
    console.log("Monthly Budget: KSh " + monthlyBudget);
    console.log("Total Expenses: KSh " + totalSpent);
    console.log("Remaining Balance: KSh " + remainingBalance);
    console.log("Number of Expenses: " + expenses.length);
    console.log("============================================");
}


// ==========================================
// 8. CALCULATE EXPENSES BY CATEGORY
// ==========================================

function calculateCategoryTotal(category) {

    let total = 0;

    // Loop through all expense records
    for (let expense of expenses) {

        // Decision making
        if (expense.category === category) {

            total += expense.amount;
        }
    }

    return total;
}


// ==========================================
// 9. UPDATE CATEGORY CARDS
// ==========================================

function updateCategoryCards() {

    // Loop through every category card
    for (let card of categoryCards) {

        let categoryName =
            card.querySelector("h3").textContent;

        let amountElement =
            card.querySelector("strong");

        let categoryTotal =
            calculateCategoryTotal(categoryName);

        amountElement.textContent =
            "KSh " + categoryTotal.toLocaleString();
    }
}


// ==========================================
// 10. DISPLAY EXPENSES IN TABLE
// ==========================================

function displayExpenses() {

    if (!expenseTableBody) {
        return;
    }

    // Clear the existing table
    expenseTableBody.innerHTML = "";

    // Loop through the expense array
    for (let expense of expenses) {

        // Create a new table row
        let row =
            document.createElement("tr");

        // Add expense information to the row
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>KSh ${expense.amount.toLocaleString()}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
        `;

        // Add the row to the webpage
        expenseTableBody.appendChild(row);
    }
}


// ==========================================
// 11. DISPLAY FORM MESSAGES
// ==========================================

function showMessage(message, type) {

    const messageElement =
        document.getElementById("form-message");

    if (!messageElement) {
        return;
    }

    messageElement.textContent = message;

    messageElement.className =
        "form-message " + type;
}


// ==========================================
// 12. HANDLE USER INTERACTION
// ==========================================

expenseForm.addEventListener(
    "submit",
    function(event) {

        // Prevent the webpage from refreshing
        event.preventDefault();


        // ======================================
        // COLLECT USER INPUT
        // ======================================

        let expenseName =
            expenseNameInput.value.trim();

        let expenseAmount =
            Number(expenseAmountInput.value);

        let expenseCategory =
            expenseCategoryInput.value;


        // ======================================
        // VALIDATE USER INPUT
        // ======================================

        if (expenseName === "") {

            showMessage(
                "Please enter an expense name.",
                "error"
            );

            return;
        }


        if (
            expenseAmount <= 0 ||
            isNaN(expenseAmount)
        ) {

            showMessage(
                "Please enter a valid expense amount.",
                "error"
            );

            return;
        }


        if (expenseCategory === "") {

            showMessage(
                "Please select an expense category.",
                "error"
            );

            return;
        }


        // ======================================
        // CREATE NEW EXPENSE RECORD
        // ======================================

        let newExpense = {

            name: expenseName,

            amount: expenseAmount,

            category: expenseCategory,

            date: new Date().toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            )
        };


        // ======================================
        // STORE RECORD IN ARRAY
        // ======================================

        expenses.push(newExpense);


        // ======================================
        // UPDATE THE WEBPAGE
        // ======================================

        displayExpenses();

        updateBudgetSummary();

        updateCategoryCards();


        // ======================================
        // CHECK BUDGET AFTER NEW EXPENSE
        // ======================================

        let remainingBalance =
            calculateRemainingBalance(
                monthlyBudget,
                expenses
            );


        if (remainingBalance < 0) {

            showMessage(
                "Expense added, but you have exceeded your budget.",
                "warning"
            );

        } else if (remainingBalance <= monthlyBudget * 0.2) {

            showMessage(
                "Expense added. Warning: your budget is almost used.",
                "warning"
            );

        } else {

            showMessage(
                "Expense added successfully!",
                "success"
            );
        }


        // ======================================
        // CLEAR FORM
        // ======================================

        expenseForm.reset();
    }
);


// ==========================================
// 13. GET MONTHLY BUDGET FROM USER
// ==========================================

let userBudget =
    prompt("Enter your monthly budget in KSh:");


// Validate the budget entered by the user
if (
    userBudget !== null &&
    userBudget !== "" &&
    Number(userBudget) > 0
) {

    monthlyBudget =
        Number(userBudget);

} else {

    monthlyBudget = 50000;
}


// ==========================================
// 14. INITIAL DISPLAY
// ==========================================

// Display existing expense records
displayExpenses();

// Calculate and display budget information
updateBudgetSummary();

// Update category cards
updateCategoryCards();
