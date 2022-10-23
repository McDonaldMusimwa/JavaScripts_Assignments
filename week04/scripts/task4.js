/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const Myself = {}
// Step 2: Inside of the object, add a property named name with a value of your name as a string
Myself["name"] = "McDonald",
    // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    Myself["photo"] = "https://drive.google.com/file/d/1x-odaODZKJu7PrY4dNqJwtSx4uCPQJgu/view?usp=sharing",
    // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    Myself["favorite"] = ["sadza", "rise", "meat"],
    // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    Myself["hobbies"] = ["photography", "Hiking", "western movies"]
// Step 6: Add another property named placesLived with a value of an empty array
Myself["placesLives"] = [],
    // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
    Myself["placesLives"].unshift({ "place": "", "length": "" })

// Step 8: For each property, add appropriate values as strings
Myself.placesLives[0]["place"] = "Capetown"
Myself.placesLives[0]["length"] = "7years"

// Step 9: Add additional objects with the same properties for each place you've lived
Myself["placesLives"].push({ "place": "", "length": "" })
Myself.placesLives[1]["place"] = "Mutare"
Myself.placesLives[1]["length"] = "22years"


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = Myself["name"]
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", "./images/me.png")
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
let alternative = Myself.name
document.querySelector("#photo").setAttribute("alt", "alternative")
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let favs = Myself["favorite"]
let list = document.querySelector('#favorite-foods')
favs.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    list.appendChild(li);
})
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbies = Myself["hobbies"]
let listi = document.querySelector('#hobbies')
hobbies.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    listi.appendChild(li);
})
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let data = []
data.unshift(Myself.placesLives[0].place)
data.push(Myself.placesLives[1].place)

data.forEach((item) => {
    let dt = document.createElement("dt");
    dt.innerText = item;
    document.getElementById("places-lived").appendChild(dt);
})


let data2 = []
data2.unshift(Myself.placesLives[0].length)
data2.push(Myself.placesLives[1].length)
data2.forEach((item) => {
    let dd = document.createElement("dd");
    dd.setAttribute('class','time')
    dd.innerText = item;
    document.getElementById("places-lived").appendChild(dd);
})





