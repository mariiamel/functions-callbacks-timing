/*  //  //  //  //  //  //  //  //
1.
write an arrow function that accepts three parameters, multiplies them, and returns the product
invoke the function and assign its return to a new variable
print the variable
*/  //  //  //  //  //  //  //  //

/*  //  //  //  //  //  //  //  //
2.
refactor these two named functions as arrow functions
*/  //  //  //  //  //  //  //  //

// limits a given number to a specified range of minimum and maximum
function clamp(number, minimum, maximum) {
  if(number > maximum) {
    return maximum
  }
  if(number < minimum) {
    return minimum
  }
  return number
}

// returns boolean true if number is even, otherwise returns false
function isEven(number) {
  if(number % 2 === 0) {
    return true
  }
  return false
}

const clampCheck = clamp(-45, 0, 100) // will return 0
const isEvenCheck = isEven(3) // will return false

console.log(clampCheck)
console.log(isEvenCheck)

/*  //  //  //  //  //  //  //  //
3.
the higher order function 'numberAndCallback()' is accepting a named function 'SubtractOne()' as a callback, 
refactor subtractOne() to be an arrow function declared inline in numberAndCallback()'s parameters
*/  //  //  //  //  //  //  //  //

function numberAndCallback(number, callback){
  return callback(number)
}

function subtractOne(number) {
  return number - 1
}

let numberAndCallbackCheck = numberAndCallback(10, subtractOne) //output 9

console.log(numberAndCallbackCheck)

/*  //  //  //  //  //  //  //  //
4.
create a global variable and assign it a value of 0
write an arrow function that increments the global variable by 1 and logs it
supply the arrow function as a callback for setInterval() with a time of 1 second
expected log:
0
1
2
3
4
5
6
7
8
...ect
*/  //  //  //  //  //  //  //  //

/*  //  //  //  //  //  //  //  //
5.
refactor your solution to challenge 3 so when the global variable reaches 5, it is set back to 0
expected log:
0
1
2
3
4
5
0
1
2
3
4
...etc
BONUS: use the modulus % operator
*/  //  //  //  //  //  //  //  //


/*  //  //  //  //  //  //  //  //
6.
refactor your solution to challenge 3 so when the global variable reaches 5, the interval is cleared
*/  //  //  //  //  //  //  //  //

/*  //  //  //  //  //  //  //  //
7.
Use setInteral and setTimeout to write a program that prints the following:
10
9
8
7
6
5
4
3
2
1
Blast off!
Think about what you will need to solve this problem 
what global variables will you need?
what functions?
what will the functions need to do?
try writing out the solution in plain english 'pseudo code' first to get started
*/  //  //  //  //  //  //  //  //
