var age = 19;
var weight = 50;
var Height = 1.7;
var BMI = weight / (Height*Height);
console.log(BMI)

if (age <= 20){
   
    if( BMI <= 16.4){
        console.log("Underweight")
    }
    else if( BMI >= 16.5 && BMI <= 23){
        console.log("Normal");
    }
    else if( BMI >= 23.1 && BMI <=  28){
        console.log("Overweight");
    }
    else if(  BMI >=  28.1){
        console.log("Obese");
    }
}
if ( age >20 ){
    if( BMI <= 18.4){
        console.log("Underweight")
    }
    else if( BMI >= 18.5 && BMI <= 24.9){
        console.log("Normal");
    }
    else if( BMI >= 25.0 && BMI <=  39.9){
        console.log("Overweight");
    }
    else if(  BMI >=  40){
        console.log("Obese");
    }
}