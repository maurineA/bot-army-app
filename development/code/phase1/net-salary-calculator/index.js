let prompt = require('prompt-sync')();
//get input from the user for the basic salary and benefits)
let basicSalary = prompt('Enter the basic salary: ');
let benefits = prompt('Enter the benefits: ');

// Calculate PAYE with the tax rates provided on https://www.aren.co.ke/payroll/taxrates.htm.
function calculatePAYE(income) {
    if (income <= 24000) {
        return 0.1 * income;
    } else if (income <= 32333) {
        return 2400 + 0.25 * (income - 24000);
    } else if (income <= 41000) {
        return 5367.5 + 0.3 * (income - 32333);
    } else if (income <= 83333) {
        return 9240 + 0.32 * (income - 41000);
    } else {
        return 23840 + 0.36 * (income - 83333);
    }
}

// Calculate NHIF deduction provided on https://www.aren.co.ke/payroll/taxrates.htm
function calculateNHIF(income) {
    if (income <= 5999) {
        return 150;
    } else if (income <= 7999) {
        return 300;
    } else if (income <= 11999) {
        return 400;
    } else if (income <= 14999) {
        return 500;
    } else if (income <= 19999) {
        return 600;
    } else if (income <= 24999) {
        return 750;
    } else if (income <= 29999) {
        return 850;
    } else if (income <= 34999) {
        return 900;
    } else if (income <= 39999) {
        return 1000;
    } else if (income <= 44999) {
        return 1100;
    } else if (income <= 49999) {
        return 1200;
    } else if (income <= 59999) {
        return 1300;
    } else if (income <= 69999) {
        return 1400;
    } else if (income <= 79999) {
        return 1500;
    } else if (income <= 89999) {
        return 1600;
    } else if (income <= 99999) {
        return 1700;
    } else {
        return 1800;
    }
}

// Calculate NSSF the employer and employee each contribute 6% of pensionable pay to NSSF
function calculateNSSF(income) {
    const nssfPercentage = 0.06; // 6% of income for NSSF
    return nssfPercentage * income;
}



// Calculate gross salary.
let grossSalary = basicSalary + benefits;

// Calculate deductions.
let paye = calculatePAYE(grossSalary);
let nhif = calculateNHIF(grossSalary);
let nssf = calculateNSSF(grossSalary);

// Calculate net salary.
let netSalary = grossSalary - paye - nhif - nssf;

// Display the results.
console.log("Gross Salary:", grossSalary);
console.log("PAYE:", paye);
console.log("NHIF Deductions:", nhif);
console.log("NSSF Deductions:", nssf);
console.log("Net Salary:", netSalary);

