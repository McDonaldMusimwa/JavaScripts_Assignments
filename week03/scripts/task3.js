/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    const total = number1+number2
    return total

}


// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum

function addNumbers  (){
    const inputUser1 = document.getElementById("addend1").value
    const inputUser2 = document.getElementById("addend2").value
    document.getElementById("sum").innerHTML=add(parseInt(inputUser1), parseInt(inputUser2))
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const buttonELement = document.getElementById("addNumbers")
buttonELement.addEventListener("click", addNumbers)


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract=function(number1, number2){
    return number1-number2
}





const subtractNumbers = function() {

    const inputUser1 = document.getElementById("minuend").value
    const inputUser2 = document.getElementById("subtrahend").value
    document.getElementById("differnce").innerHTML=subtract(parseInt(inputUser1), parseInt(inputUser2))
 
}

const buttonsubtract = document.getElementById("subtractNumbers")
buttonsubtract.addEventListener("click", subtractNumbers)




// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply=(number1, number2)=> {
   return number1*number2

}

const multiplyNumbers = () => {
    const inputUser1 = document.getElementById("factor1").value
    const inputUser2 = document.getElementById("factor2").value
    document.getElementById("product").innerHTML=multiply(parseInt(inputUser1), parseInt(inputUser2))
   
}

const buttonmultiply = document.getElementById("multiplyNumbers")
buttonmultiply.addEventListener("click", multiplyNumbers)

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
    const total = parseInt(number1) / parseInt(number2)
    return total

}





const divideNumbers = () => {
    const inputUser1 = document.getElementById("dividend").value
    const inputUser2 = document.getElementById("divisor").value
    document.getElementById("devide").innerHTML=divide(parseInt(inputUser1), parseInt(inputUser2))
  
}
const buttondivide = document.getElementById("divideNumbers")
buttondivide.addEventListener("click", divideNumbers)
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();
// Step 2: Declare a variable to hold the current year
let year = 0
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = year

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = newArray
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

document.querySelector('#odds').innerHTML = newArray.filter(number=> number% 2 !== 0) 
        
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

document.querySelector('#evens').innerHTML = newArray.filter(number =>number % 2 === 0)
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById("sumOfArray").innerHTML = newArray.reduce((total,num)=>total+num);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

document.querySelector("#multiplied").innerHTML = newArray.map(total=>total*2)

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const mult = newArray.map(funct)

function funct(elem) {

    return (elem * 2)
}

function func(total, num) {
    return total + num
}

document.querySelector("#sumOfMultiplied").innerHTML = mult.reduce(func)