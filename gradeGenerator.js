function getGrade(marks) {
    let grade;
//checks if the marks are within the valid range
    if (marks < 0 || marks > 100) {
        return "Invalid marks!";
    }
//Assigning grades based on the Marks
    if (marks > 79 && marks <= 100) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else if (marks >= 0 && marks <= 39) {
        grade = 'E';
    }
//returns grade message
    return `The grade is: ${grade}`;
}

// Prompt user for marks
const input = prompt("Enter student marks");
//converts any input string to an integer
const marks = parseInt(input, 10);
//checks if the entered value is a number 
if (isNaN(marks)) {
    console.log("Please enter a valid number.");
} else {
//call the grade
    console.log(getGrade(marks));
}
