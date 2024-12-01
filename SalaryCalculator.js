// function to calculat PAYE
function calculatePAYE(grossSalary) {
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        tax = 2400 + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        tax = 2400 + 2083.25 + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        tax = 2400 + 2083.25 + 50800 + ((grossSalary - 500000) * 0.325);
    } else {
        tax = 2400 + 2083.25 + 50800 + 97500 + ((grossSalary - 800000) * 0.35);
    }
    //returns toral PAYE
    return tax;
}

// function to calculate NHIF 
function calculateNHIF(grossSalary) {
    let nhif = 0;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700;
    return nhif;
}

// calculates NSSF 
function calculateNSSF(grossSalary) {
    let tier1 = 0;
    let tier2 = 0;

    if (grossSalary <= 7000) {
        tier1 = grossSalary * 0.06;
    } else if (grossSalary <= 36000) {
        tier1 = 7000 * 0.06;
        tier2 = (grossSalary - 7000) * 0.06;
    } else {
        tier1 = 7000 * 0.06;
        tier2 = (36000 - 7000) * 0.06;
    }

    return tier1 + tier2;
}
// Prompt user to enter basic salary in (Ksh)
let basicSalary = parseFloat(prompt("Enter your basic salary (in Ksh):"));
// Prompt to enter any additional benefits in (Ksh)
let benefits = parseFloat(prompt("Enter your benefits (in Ksh):"));

// calculate gross salary
const grossSalary = basicSalary + benefits;

// calculates deductions
const paye = calculatePAYE(grossSalary);
const nhif = calculateNHIF(grossSalary);
const nssf = calculateNSSF(grossSalary);

// calculates Net salary
const netSalary = grossSalary - (paye + nhif + nssf);

//  results
console.log(`Gross Salary: Ksh ${grossSalary}`);
console.log(`PAYE: Ksh ${paye}`);
console.log(`NHIF: Ksh ${nhif}`);
console.log(`NSSF: Ksh ${nssf}`);
console.log(`Net Salary: Ksh ${netSalary}`);
