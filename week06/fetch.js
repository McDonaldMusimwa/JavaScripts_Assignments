const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '467f53e1d4msh92fb9312737050ap166f95jsnd66358ad48c7',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

fetch('https://car-data.p.rapidapi.com/cars/types', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    


export const url = 'https://car-data.p.rapidapi.com/cars/types';
export const apikey = "";

