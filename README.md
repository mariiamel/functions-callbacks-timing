# JS Functions, Callbacks and Timing Functions

## Learning Objectives
___

* Use functions that manipulate global variables  
* Use functions that accept parameters and return values
* Assign an anonymous function to a variable
* Pass a callback function to a higher order function as a parameter and invoke it
* Pass a callback function to a timing function and manipulate global variables

## Defining a Named Function
___

A function is like a container of code, you can put your code inside of it and save it for later when you need to use it. Functions are useful for storing code that you might need to use over and over in different places, allowing you to write *DRY code*.

To *declare* a *named function*, you start with the `function` keyword followed by the name you want to *invoke* it with later to run the code inside.

```javascript

function sayHello() {
  console.log("hi, I'm a function")
}
```

The parenthesis `()` after the name are always needed, even if they are empty, and all the code between the curly bois `{ }` will run when the function is invoked.

The code inside the function won't run until the function is *invoked* with the function's name followed by parenthesis:

```javascipt
sayHello() // logs hi, I'm a function
```

## Global and Local Scope
___

Variables declared outside of a function are in the *global scope* -- **everyone has access to them**. Variables declared with `let` inside functions are in the *local scope* of that function -- **nobody has access to them outside of the function**

```javascript 
let globalVariable = "Everyone can access me, I'm a variable in the global scope!"

function sharingIsCaring() {
  console.log(`sharingIsCaring() logs: ${globalVariable}`)
}

function workingTogether() {
  console.log(`workingTogether() logs: ${globalVariable}`)
}

sharingIsCaring() 
workingTogether()
```

Trying to access a variable that has been declared in a *local scope* from some where else will throw an error:

```javascript
function selfish() {
  let mineAllMine = "nobody else can get me"
}

console.log(mineAllMine) // will throw an error
```

## Supplying Function Parameters 
___

Functions can be given *parameters* when the are *invoked*, and they will use the parameters when they run their code. *NOTE function parameters are often called **function arguments** as well*. The parameters are named like variables when the function is *declared*.

```javascript
function addTwoNumbers(number1, number2) {
  // add the arguments together
  let sum = number1 + number2
  console.log(`${number1} plus ${number2} is ${sum}`)
}

addTwoNumbers(5, 10) // 15
addTwoNumbers(3, 3) // 6

// variables can be passed to function arguments to!!
let nine = 9
let seven = 7

addTwoNumbers(nine, seven)

```

## Returning Values From Functions
---

If *parameters* are the entrance to a function, then its *return* is the exit. A function's return will **stop** the code inside, and can give a value back.

```javascript
function addTwoAndReturn(number1, number2) {
  // log the values passed as parameters
  console.log(`thanks for ${number1} and ${number2}!`)
  // add the arguments together
  let sum = number1 + number2
  // return the sum once the parameters have been added together
  return sum
  console.log("I will never run! Help I'm trapped!") // will not run because it is after the return
}
```

When a function *returns* something, you can assign it to a variable:

```javascript
let firstAdd = addTwoAndReturn(3, 7) // set firstAdd to 10
let secondAdd = addTwoAndReturn(12, 8) // set secondAdd to 20

console.log(`firstAdd is: ${firstAdd} and secondAdd is ${secondAdd}`)
```

**check out the exercises in ./js/functions-lab.js**


## Anonymous Functions
---

In javascript, functions are called *first class*. That means they are just like any other datatype, they can:

* be stored them in variable
* **passed as arguments to other functions**
* created within functions
* returned from functions

Instead of creating a named function, lets make an anonymous function and assign it to a constant:

```javascript 

const anon = function() {
  console.log("I prefer the privacy of anonymity")
}
```

*Arrow functions* are another type of anonymous function, and are written with a fat arrow `=>` instead on the keyword function: 

```javascript
const arrow = () => {
  console.log("I'm an arrow function 🏹")
}
```

Parameters are passed to arrow functions between the parentheses like a named function:

```javascript
const arrowAdd = (number1, number2) => {
  return number1 + number2
}

let arrowSum = arrowAdd(10, 20)
console.log(arrowSum)
```

## Callback Functions

*Callback functions* are passed to another function's parameters. Make sure not to use the `()` when passing the callback, overwise javascript will *invoke* it right away!

```javascript
// will call a function passed to it
const higherOrder = (func) => {
  func()
} 

const callback = () => {
  console.log("callback has been invoked!")
}

higherOrder(callback)
```

what happens if you invoke `callback()` when you pass it to higher order?

```javascript
higherOrder(callback())
```

*callbacks* can interact with the parameters they are pass along with!

```javascript
// take two numbers and a function, return the result of the function's operation on the numbers
const doCalculation = (num1, num2, func) => {
  return func(num1, num2)
}

let funception = doCalculation(50, 100, arrowAdd) // add 50 and 100 together with arrowAdd

console.log(funception) // 150
```

*callbacks* can also be declared *inline* straight into the function parameters when you are invoking the *higher order* function:

```javascript
let funceptionInline = doCalculation(50, 100, (number1, number2) => {
  return number1 - number2
})

console.log(funceptionInline)
```

## Timing Functions
---

Javascript has two important built-in functions used for timing of events: `setInteraval()` and `setTimeout()`. Both accept a callback function and an how long to wait (in milliseconds) before invoking the callback. `setInterval()` invokes the callback over and over, and `setTimeout()` invokes it just once.

```javascript

const justOnce = () => {
  console.log('I will only print once!')
}

const tick = () => {
  console.log('tick')
}

setTimeout(justOnce, 2500) // invoke justOnce after 2 and a half seconds
setInterval(tick, 1000) // invoke tick every one second
```

If `setInteraval()` or `setTimeout()` are set to a global variable, they can be stopped with `clearInterval()` and `clearTimeout()` respectively:

```javascript
let clock = setInterval(tick, 1000) // invoke tick every one second

const stopClock = () => {
  console.log('stop the clock!')
  clearInterval(clock)
}

setTimeout(stopClock, 5000) // clear the clock interval in 5 seconds
```

**check out the exercises in ./js/callbacks-lab.js**