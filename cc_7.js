
// Task 1 - Customer Invoice Calculation


function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
//decleared a function with properties and declared total and the formula involved 
    return `Total Invoice: $${total.toFixed(2)}`;
}
//returned the total invoice using .tofixed(2) which rounds it to two decimal places 
console.log("Task 1 Total Invoice 1:", calculateInvoice(100, 0.08, 5)); 
console.log("Task 1 Total Invoice 2:",calculateInvoice(500, 0.1, 20)); 
//logged both the invoiuce 


// Task 2 - Employee Hourly Wage Calculation

let calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); 
    // this creates a function and is the formula for hourlywage 
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; 
};
// returns hourly wage and rounds to two decimals using .tofixed()
console.log("Task 2 Wage 1:", calculateHourlyWage(52000, 40));

console.log("Task 2 Wage 2:", calculateHourlyWage(75000, 35)); 
//log hourly wages 

//Task 3

const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
// made an arrow cunction that helps calculate the discounted price

    if (years >= 5) {
        discount = 0.15;
    } else if (years >= 3) {
        discount = 0.10;
    } else {
        discount = 0.05;
    }

    return amount - (amount * discount);
};

//the if else statemtns help deterime what discount is applied

console.log(`Task 3 part 1: discounted price: $${calculateLoyaltyDiscount(100, 6).toFixed(2)}`); 
console.log(`Task 3 part 2: discounted price: $${calculateLoyaltyDiscount(200, 2).toFixed(2)}`); 
//logged the discounted prices

//task 4
function calculateShippingCost(weight, location, expedited = false) {
    let Cost = 0; 
//created a fucntion to calculate the shipping costs

    if (location === "USA") {
        Cost = 5 + (0.5 * weight);
    } else if (location === "Canada") {
        Cost = 10 + (0.7 * weight);
    }

    if (expedited === true) { 
        Cost = Cost + 10;
    }

    return Cost; 
}
// created if else statement that take the location and calculates the shipping costs based on weight 

console.log(`Task 4 part 1: Shipping Cost: $${calculateShippingCost(10, "USA", true).toFixed(2)}`);
console.log(`Task 4 part 2: Shipping Cost: $${calculateShippingCost(5, "Canada", false).toFixed(2)}`);

// logged the shipping costs for the two locations 
