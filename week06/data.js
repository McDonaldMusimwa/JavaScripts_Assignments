const url = 'https://api.imgflip.com/get_memes';

async function getdata(url) {
    const response = await fetch(url);

    if (response.ok) {

        const Data = await response.json();


        dothis(Data)
    }
}


function dothis(item) {
    let array = item.data.memes;
    console.log(array)
    array.forEach(item => {
        const element = document.querySelector(".display")

        let name = document.createElement("label")
        name.innerHTML = item.name
        let picture = document.createElement("picture")

        let meme = document.createElement("img")
        meme.setAttribute("src", item.url)
        picture.appendChild(name)
        picture.appendChild(meme)




        element.append(picture)


    });

}

function search() {
    var input, filter, display, picture, label, i, txtValue;
    input=document.getElementById("myInput")
    filter = input.value.toUpperCase();
    display = document.querySelector(".display");
    picture = display.getElementsByTagName("picture");

    for (i = 0; i < picture.length; i++) {
        label = picture[i].getElementsByTagName("label")[0];
        console.log(label)
        txtValue = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            picture[i].style.display = "";
        } else {
            picture[i].style.display = "none";
        }

    }

}


getdata(url);

function getnewjoke() {
    window.location.reload(true);
}

document.querySelector("#myInput").addEventListener("keyup", search)