var age = 60;
var student = false;

if( age < 10 ){
    console.log("Ticket is free for children");
}
else if( student == true){
    console.log("Ticket price is 400");
}
else if(age >= 60){
    console.log("Senior citizens  gets a 15% Discount");
}
else{
    console.log("Regular ticket fare 800 tk");
}