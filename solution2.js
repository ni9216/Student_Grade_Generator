function checkSpeed(speed){
    //limit in km/h
const speedLimit = 70;
let demeritPoints = 0;

//if the speed is below the limit
if (speed <= speedLimit){
    console.log("Ok")
} else{
    const excessSpeed = speed - speedLimit;
demeritPoints = Math.floor(excessSpeed / 5);

if (demeritPoints> 12){
    console.log("license suspended");
} else{
    console.log(`Points: ${demeritPoints}`);
}
}
}

