/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
// Step 4: Declare a variable to hold a message that will be displayed
const current_Date = new Date();
console.log(current_Date)
let dayOfTheWeek = current_Date.getDay();
console.log(dayOfTheWeek)
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfTheWeekString = "";
var message = "";
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
switch (dayOfTheWeek) {
    case 0:
        dayOfTheWeekString = weekday[0];
        break;
    case 1:
        dayOfTheWeekString = weekday[1];
        break;
    case 2:
        dayOfTheWeekString = weekday[2];
        break;
    case 3:
        dayOfTheWeekString = weekday[3];
        break;
    case 4:
        dayOfTheWeekString = weekday[4];
        break;
    case 5:
        dayOfTheWeekString = weekday[5];
        break;
    case 6:
        dayOfTheWeekString = weekday[6];
        break
    default:
        dayOfTheWeekString = `Unkown!:${dayOfTheWeek}`
}

if (current_Date > 0 && current_Date < 6) {
    message = "Its not yet weeked Hang in There"
} else {
    message = "Its weekend Hooray time to relax and have fun";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message1 = "";
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2


document.querySelector("#message2").innerHTML = dayOfTheWeekString
document.querySelector("#message1").innerHTML = message

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = []
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(array) {
    array.forEach(temple => {
        let article = document.createElement("article");




        let h3 = document.createElement("h3");
        h3.innerText = temple.templeName


        let h4location = document.createElement("h4");
        h4location.innerText = temple.location
        article.append(h4location);

        let h4dedicated = document.createElement("h4");
        h4dedicated.innerText = temple.dedicated

        let pictureelement = document.createElement('picture')
        let image = document.createElement("img");
        image.setAttribute('src', temple.imageUrl)
        image.setAttribute('alt', temple.templeName)
        pictureelement.appendChild(image)



        article.append(h3);
        article.append(h4location);
        article.append(h4dedicated);
        article.append(pictureelement);
        document.querySelector("#temples").appendChild(article)
    }

    );

}


// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
let url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
async function getTemples(url) {

    let response = await fetch(url)
    if (response.ok) {
        templeList = await response.json()
        output(templeList)

    }


}
getTemples(url);


// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    document.getElementById("temples").innerHTML = ""


}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
function compare(a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else return 0;
}



function sortBy() {
    reset()

    const sortedTemples = document.querySelector("#sortBy").value;
    //sort out temples
    switch (sortedTemples) {
        case 'templeNameAscending':
            output(templeList.sort((tem1, tem2) => {
                let temple1 = tem1.templeName.toLowerCase();
                let temple2 = tem2.templeName.toLowerCase();
                if (temple1 < temple2) return -1;
                else if (temple1 > temple2) return 1;
                else return 0;
            })
            );
            break;
        case 'templeNameDescending':
            output(templeList.sort((tem1, tem2) => {
                let temple1 = tem1.templeName.toLowerCase();
                let temple2 = tem2.templeName.toLowerCase();
                if (temple1 > temple2) return -1;
                else if (temple1 < temple2) return 1;
                else return 0;
            })
            );
            break;
        case '2000':
            output(templeList.filter(temple => temple.dedicated.substr(temple.dedicated.length - 4, 4) < filter))
            break;
        default:
            output(
                templeList.sort(
                    (tem1, tem2) =>
                        tem1.templeName.toLowerCase() > tem2.templeName.toLowerCase() ? 1 :
                            tem2.templeNametoLowerCase() > tem1.templeName.toLowerCase() ? -1 :
                                0));
            break;
    }
    /* default:
         output(templeList.sort((tem1, tem2) => tem1.templeName.toLowerCase() > tem2.templeName.toLowerCase() ? 1
             : tem2.templeName.toLowerCase() >
                 tem1.templeName.toLowerCase()
                 ? -1
                 : 0)}*/


}

document.querySelector("#sortBy").addEventListener("change", sortBy)
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

