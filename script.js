// ==========================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ==========================================

// 1. APPLICATION DATA
let monthlyBudget = 50000;

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
    },
    {
        name: "House Rent",
        amount: 12000,
        category: "Rent"
    },
    {
        name: "Movie",
        amount: 800,
        category: "Entertainment"
    },
    {
        name: "Groceries",
        amount: 1500,
        category: "Food"
    }
];


// ==========================================
// 2. BUDGET CALCULATION FUNCTIONS
// ==========================================

// Calculate total amount spent
function calculateTotalExpenses(expenses) {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}


// Calculate remaining budget
function calculateRemainingBalance(budget, expenses) {
    let totalExpenses = calculateTotalExpenses(expenses);

    return budget - totalExpenses;
}


// ==========================================
// 3. COLLECT USER INPUT
// ==========================================

let userBudget = prompt(
    "Enter your monthly budget in KSh:"
);

if (userBudget !== null && userBudget !== "") {
    monthlyBudget = Number(userBudget);
}


// ==========================================
// 4. PROCESS BUDGET DATA
// ==========================================

let totalSpent = calculateTotalExpenses(expenses);

let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    expenses
);


// ==========================================
// 5. DISPLAY RESULTS IN CONSOLE
// ==========================================

console.log("========== SpendWise Budget Report ==========");

console.log("Monthly Budget: KSh " + monthlyBudget);

console.log("Total Expenses: KSh " + totalSpent);

console.log("Remaining Balance: KSh " + remainingBalance);

console.log("Number of Expenses: " + expenses.length);

console.log("============================================");