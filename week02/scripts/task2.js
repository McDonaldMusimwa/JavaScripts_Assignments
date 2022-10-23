//the name requirement
const myName= "McDonld"
document.querySelector("#name").innerHTML=myName
//current year requirement
const currentYear = 2022;
document.querySelector('#year').innerHTML= currentYear

//the picture requirement
const myPicture = document.getElementById("mainimage").setAttribute("src","./images/me.png")


//fav foods requirements
const favFoods= ["bananas","Sadza","beef","water"]
document.querySelector("#food").innerHTML=favFoods
//adding more foods
const moreFoods=["rice","burger"]
favFoods.push(moreFoods)
//editing the html
document.querySelector("#food").innerHTML=favFoods
//remove first item 
favFoods.shift()
document.querySelector("#food").innerHTML=favFoods
//remove last item
favFoods.pop()
document.querySelector("#food").innerHTML=favFoods


