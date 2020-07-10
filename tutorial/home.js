/* 
Alejandro Gonzalez Carrillo
Learning Javascript
*/

// console.log('hello')
// alert('this is alex')

/*Variables

var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

var age = prompt('What is your age?');

document.getElementById('someText').innerHTML = age;
*/

// Numbers in Javascript
/*
var num1 = 5.7;

//Increment
num1++;

//Decrement
num1--;

console.log(num1*10);
*/

/* Functions

function fun() {
    alert('this is a function');
}

//Call
fun();

// Lets create a funciton that take in a name and says hello followed by your name.

function greeting() {
    var name = prompt('What is your name?');
    var result = 'Hello ' + name; // string concatenation
    console.log(result);
}

*/
// greeting();

/* How do arguments work in functions?

function sumNumbers(a, b) {
    var result = a + b;
    console.log(result);
}

a = 10;
b = 10;

sumNumbers(a, b);

*/



/* While loops



var num = 0;

while(num<100){
    num += 1;
    console.log(num);
}

*/



/* For Loop



for(let num = 0; num<=100; num++) {
    console.log(num);
}
*/



/* Data types



let yourAge = 18; // Number
let yourName = 'Bob'; // string
let name = {first: 'Jane', last: 'Doe'}; //object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; //undefined
let nothing = null; // value null



// Strings in Javascript (common methods)



let fruit = 'banana';
let moreFruits = 'banana\napple'; //new line
console.log(moreFruits);

console.log(moreFruits.length);
console.log(fruit.indexOf('nan'))
console.log(fruit.slice(2,4));
console.log(fruit.replace('ban', '123'))
console.log(fruit.toLowerCase())
console.log(fruit.toUpperCase())
console.log(fruit.charAt(2))
console.log(fruit[2])
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by a character

*/


// Arrays in Javascript



let fruits = ['banana','apple','orange','pineapple'];
fruits = new Array('banana','apple','orange','pineapple');

// alert(fruits[2]); // access value at index 2nd

fruits[0] = 'pear';

console.log(fruits)

for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i])
}



// Array Common Methods



console.log('to string ', fruits.toString())
console.log(fruits.join(' - '));
console.log(fruits, fruits.pop(), fruits); //removes last item
console.log(fruits.push('blackberries'), fruits) // adds a last item
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit';
console.log(fruits)
fruits.shift(); // removes first element from a array
console.log(fruits)
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits)

let vegetables = ['asparagus','tomato','broccoli'];
let allGroceries = fruits.concat(vegetables)
console.log(allGroceries);

console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());

let someNumbers = [5,10,2,25,3,255,1,2,5,334,321,2];

console.log(someNumbers.sort(function(a,b) {return a-b})); // sorted in ascending order
console.log(someNumbers.sort(function(a,b) {return b-a})); // sorted in descending order

let emptyArray = new Array();
for(let num = 0; num<10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);




// Objects in Javascript




let student = {
    first: 'Rafeh', 
    last: 'Qazi', 
    age: 25, 
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age + '\n' + this.height;
    }
};
// console.log(student.first);
// console.log(student.last);
// student.first = 'notRafeh'; // change value
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo())




// Conditionals, Control flows (if else)




// AND &&
// OR ||
/*
var age = prompt('What is your age?')

if((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status)
} else {
    status = 'not my audience';
    console.log(status)
}
*/


// Switch statements
switch(6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);