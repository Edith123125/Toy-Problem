function speedDetector(speed) {
    const speedLimit = 70;
    const maxDemeritPoints = 12;
     // Check if the speed is below the speed limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
    //calculates the demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        
        if (demeritPoints >= maxDemeritPoints) { 
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}
// Prompts user to enter car speed (in km/h)
let userSpeed = prompt("Enter the speed of the car:");
// Convert the input from string to integer
userSpeed = parseInt(userSpeed); 
//call speedDetector function
speedDetector(userSpeed);
