function speedDetector(speed) {
    const speedLimit = 70;
    const maxDemeritPoints = 12;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        
        if (demeritPoints >= maxDemeritPoints) { 
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}
let userSpeed = prompt("Enter the speed of the car:");
userSpeed = parseInt(userSpeed); 
speedDetector(userSpeed);
