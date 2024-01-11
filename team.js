const persons = [ { name : 'Marcello', surname : 'Sciulara', age : 25, city : 'Mezzojuso', hobby : 'Leggere', favoriteFood : 'Pizza', favoriteVideoGame : 'Ds3', favoriteFilm : 'V per vendetta', favoriteBook : 'Nella quarta dimensione', petName : '' }, ];


const orderByFullname = (array = []) => array.sort((a, b) => a.name.localeCompare(b.name) || a.surname.localeCompare(b.surname)); 

console.log(orderByFullname(persons))

// Marcello
const favoriteGameLOL = (array = []) => array.filter(game => game.favoriteVideoGame === 'LOL' || game.favoriteVideoGame === 'League Of Legends').map(game => `${game.favoriteVideoGame} è il videogame preferito di ${game.name} ${game.surname}`)

console.log(favoriteGameLOL(persons))