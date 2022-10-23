// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;


async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}

async function getPokemonList(urlList) {
  //code to await while we fetch 
  const respond = await fetch(urlList)
  //check to see the check was a success
  if (respond.ok) {
    //the API will send us JSON but we have to convert the response b4 we can use it
    //.json() also returns a promise so we await it as well
    const data = await respond.json();
    doStuffList(data)
  }
}





function doStuff(data) {


  const element = document.querySelector("#output")
  results = data;
  const html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  element.innerHTML = html
  console.log("first: ", results);
}





function doStuffList(data) {
  console.log(data)

  const listelement = document.querySelector("#outputList")
  const pokeList = data.results;
  pokeList.forEach((currentitem) => {
    const html = `<li>${currentitem.name}</li>`;
    listelement.innerHTML += html;
  });


}


getPokemon(url, doStuff);


getPokemonList(urlList, doStuffList)
