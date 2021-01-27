/*  //  //  //  //  //  //  //  //
1.
declare a variable in the global scope and assign it a value of 'Hello' 
write a function that concatenates the string ' World' with the variable 
invoke the function
log the variable's value after you invoke the function 
*/  //  //  //  //  //  //  //  //
let sayHello = 'Hello';
 function addWorld() {
    console.log(sayHello + 'World')
 }
 
 addWorld()

/*  //  //  //  //  //  //  //  //
2. 
write a function that assigns a numerical value to number1 and number2
write a second function that multiplies number1 by number2 and assigns the product to the variable result
write a third function that prints result's value in the console
invoke the three functions in order
*/  //  //  //  //  //  //  //  //

let number1 = 0;
let number2 = 0;
let result = 0;

function assignsValue(num1, num2){
    number1 = num1;
    number2 = num2;
}
assignsValue(1,3);
console.log(number1, number2);

function multipliesValue(number1, number2) {
    let sum = number1 * number2;
    return sum
}
const total = multipliesValue(3,5);
console.log(total)

function prints() {
    console.log(number1, number2);
    console.log(total);
}
prints()

/*  //  //  //  //  //  //  //  //
3. 
write a function that accepts a number as a parameter, squares it (multiplies it by itself) and returns the square
invoke the function and assign its return to a new variable
print the variable
*/  //  //  //  //  //  //  //  //

function squaresNumbers(number) {
    return number * number;
}

let resulrSq = squaresNumbers(4);
console.log(resulrSq);

/*  //  //  //  //  //  //  //  //
4. 
write a function that accepts two integers as parameters
convert the two integers to strings and concatenate them, return the result
invoke the function and assign its return to a new variable
print the variable
example input: 5, 4
output: "54"
example input: 67, 1
output: "671"
*/  //  //  //  //  //  //  //  //
let concNumber1 = 0;
let concNumber2 = 0;
let concatenate = '';

function concatenateNum (concNum1, concNum2) {
    concNumber1 = concNum1.toString();
    concNumber2 = concNum2.toString();
    concatenate = concNumber1 + concNumber2;
    return concatenate
}

concatenateNum(3,2);
console.log(concatenate);


/*  //  //  //  //  //  //  //  //
5. 
write a function that accepts two numbers as parameters, compares them and returns the number that is larger
invoke the function and assign its return to a new variable
print the variable
example input: 3, 15
output: 15
*/  //  //  //  //  //  //  //  //
let firstNum = 3;
let secNum = 10;
let bigger = 0;

function compares (firstNum, secNum) {
    if (firstNum > secNum) {

    }
}
/*  //  //  //  //  //  //  //  //
6. 
create an object with several key: value pairs and assign it to a variable
write a function that accept an object as an parameter, loop over the object and print out the value of every key
*/  //  //  //  //  //  //  //  //


/*  //  //  //  //  //  //  //  //
7. 
write a function that accepts an array of numbers as a parameter, loops over the array and finds the average of all the values in the array and returns it
invoke the function and assign its return to a new variable
print the variable
*/  //  //  //  //  //  //  //  //

