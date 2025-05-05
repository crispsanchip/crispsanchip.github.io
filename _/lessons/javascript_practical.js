let userName = prompt("What's your name?");

console.log(`Hi there ${userName}. This is a calculator to calculate circumference and area of a circle`); 
//this says the same thing as 
//console.log("User's name is" + userName);

//basic circle calculator
let radius = prompt("What is the radius of the circle?", 0);

const pi = 3.14159

let area = pi * (radius**2);
let circumference = pi*(radius*2)

console.log(`With a radius of ${radius} \n
The Area of the Circle is: ${area} \n
The circumference of the Circle: ${circumference}`);
// \n makes a new line and \t makes a tab


//basic comparison
let petInfo = [
  {
    petName: "Siggy",
    petType: "Cat",
    petAge: 3,
  },
  {
    petName: "Mylo",
    petType: "Cat",
    petAge: 3.5,
  },
];

let arrayExample = [0,1,2,3];