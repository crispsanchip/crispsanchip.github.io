// write a variable that is a string and output to console (hint: it's console.log(variable name))
let word = "this is a string";
console.log(word);
// write a variable that is a number and output to console (hint: it's console.log(variable name))
let num = 9;
console.log(num);
// write a variable that takes any two numbers and adds them 
let sum = 4 + 5;
// write a variable that takes any two numbers and subtracts them and output to console
let sub = 4-5;
console.log(sub);
// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 
let modQ = 3 % 2;
console.log(modQ);
// write a variable that takes any two numbers and perform an exponential value and output to console 
let exp = 3 ** 2;
console.log(exp);
// write a statement that is false using a conditional statement and output to console 
if(exp==10){ //exp = 9 so exp==10 will be false
    console.log("statement is true");
}else{
    console.log("statement is false");
}


// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  
let seal = {
    breed : "seal", 
    baby: "cute baby", 
    fluffy: "smooth", 
    output: function() {
        return `I love ${this.breed} because they are often ${this.fluffy} ${this.baby}.`
    }
}
// console.log the values of that object one by one. 

console.log(seal.breed);
console.log(seal.baby);
console.log(seal.fluffy);
console.log(seal.output());

// create an array 
let anArray = ["item1", "item2", "item3"];

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]
console.log(someArray[2]);

// call all values in the array using a loop 
for(let i = 0; i < someArray.length; i++){
    console.log(someArray[i]);
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

console.log("This statement is " + ifStatement); //this statement is false lol
