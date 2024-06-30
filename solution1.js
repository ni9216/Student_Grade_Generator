function generateGrade(){
    //input student marks and give grades
    let marks = 60
   //condition
    if(marks > 79){
        return "A";
    } else if (marks >= 60 && marks <= 79){
        return "B";
    } else if (marks >= 50 && marks <= 59){
        return "C";
      
     } else if (marks >= 40 && marks <= 49){
        return "D";
        //marks less tha 40
     } else {
        return "E"
     }

}
console.log(generateGrade());


        

    