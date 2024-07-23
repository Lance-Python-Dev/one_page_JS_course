// My first JavaScript code 
console.log('Hello World');

//VARIABLES
let myName = 'Lance'; //String literal
console.log(myName);
//RULES
// Cannot be a reserved keyword
//should be meaningful
//Cannot start with a number (1my_name)
//They cannot contain a space or hyphen

let firstName = 'Lance';
let lastName = 'Nwoke';

//CONSTANTS
//the value of a constant 'const' cannot change when compared to variables
let newInterestRate = 0.5;
let interestRate = 1;
console.log(interestRate); //error will occur because you cant change a const value 
let age = 17; //number literal
let inApproved = true; //Bool
let selectedColor = null;
//JavaScript is a dynamic language(variabe types can change in the future)

//OBJECT
let person = {
    myName: 'Lance',
    age:  17
};
//after every property of an object, always add a comma 

//chamgimg the name of person
//1. DOT NOTATION(better to understand)
person.name = 'Emeka';

//2. BRACKET NOTATION
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

//ARRAYS
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);// displays all the colors in the array
console.log(selectedColors[2]);
console.log(selectedColors.length);//displays the number of items and elements in an array

//FUNCTIONS
//Functions to perform a task(display a value on the console)
function greet() {
    console.log('Hello World');
}

greet();

//2.
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

//calculating a value 
function square(number) {
    return number * number;//calculating the square of a number
}


console.log(square(2));

greet('Lance', 'Nwoke');
greet('Timi', 'Mokuolu');


