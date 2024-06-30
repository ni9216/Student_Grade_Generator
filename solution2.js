function speedDetector(speed) {
    const speedLimit = 70;
  let demeritPoints = 0 ;
 
  
  //condition check if the speed is low limit
  if (speed < speedLimit) {
     console.log("Ok");
  } else{
    const excessSpeed = speed - speedLimit;
    demeritPoints = Math.floor(excessSpeed / 5);
    if(demeritPoints > 12){
        console.log(" License suspended");
  } else{
    console.log( `points: ${demeritPoints}`);
  }
   
  }
}

//speedDetector(80);
//speedDetector(130);
 
