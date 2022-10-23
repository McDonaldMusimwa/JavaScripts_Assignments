const url='https://geek-jokes.sameerkumar.website/api?format=json';

async function getcardata(url){
    const response = await fetch(url);

    if (response.ok){

        const data = await response.json();
        
        dothis(data)
    }
}

function dothis(info){

const element = document.querySelector("#display")
element.innerHTML=info.joke

}

getcardata(url);

function getnewjoke(){
    window.location.reload(true);
}

document.querySelector("#refresh").addEventListener("click",getnewjoke)