
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