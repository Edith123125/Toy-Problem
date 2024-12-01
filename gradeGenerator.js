function getGrade(marks) {
    let grade;

    if (marks < 0 || marks > 100) {
        return "Invalid marks!";
    }

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

    return `The grade is: ${grade}`;
}

// Prompt user for marks
const input = prompt("Enter student marks");

const marks = parseInt(input, 10);

if (isNaN(marks)) {
    console.log("Please enter a valid number.");
} else {

    console.log(getGrade(marks));
}
