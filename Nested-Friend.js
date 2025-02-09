var Marks = 80;
var friendsMarks = 39;

if( Marks >=80){
    if (friendsMarks >= 80){
        console.log("Let's go for lunch");
    }
    else if (friendsMarks >= 60 && friendsMarks <= 79){
        console.log("Good luck next time");
    }
    else if (friendsMarks >= 40 && friendsMarks <= 59){
        console.log("I will unseen his message");
    }
    else{
        console.log("I will block my friend.");
    }
}
else{
    console.log("I have go home and sleep and act sad");
}