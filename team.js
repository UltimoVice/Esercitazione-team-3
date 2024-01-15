const persons = [ 
  { name : 'Marcello', surname : 'Sciulara', age : 25, city : 'Mezzojuso', hobby : 'Leggere', favoriteFood : 'Pizza', favoriteVideoGame : 'Ds3', favoriteFilm : 'V per vendetta', favoriteBook : 'Nella quarta dimensione', petName : '' },
  { name : "Riccardo", surname : "Grassi", age : 27, city : "Livorno", hobby : "Gym", favoriteFood : "Cacciucco", favoriteVideoGame : "Skyrim", favoriteFilm : "Old boy", favoriteBook : "Neuromante", petName : "Ecate"},
  { name :"mike", surname : "darmand", age : 27, city : "reggio calabria", hobby : "nothing", favoriteFood : "frutta", favoriteVideoGame : "street fighter", favoriteFilm : " vikings", favoriteBook : " ", petName : "gazelle"},
  { name : 'Kathreen', surname : 'Espiritu', age : 27, city : 'Milano', hobby : 'Giadinaggio', favoriteFood : 'Lasagna', favoriteVideoGame : '', favoriteFilm : 'Titanic', favoriteBook : '', petName : '' },
];


const orderByFullname = (array = []) => array.sort((a, b) => a.name.localeCompare(b.name) || a.surname.localeCompare(b.surname)); 

console.log(orderByFullname(persons))

// Marcello
const favoriteGameLOL = (array = []) => array.filter(game => game.favoriteVideoGame === 'LOL' || game.favoriteVideoGame === 'League Of Legends').map(game => `${game.favoriteVideoGame} è il videogame preferito di ${game.name} ${game.surname}`)

console.log(favoriteGameLOL(persons))

// Riccardo
function middleAge(persons) {
    const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
    return console.log(totalAge / persons.length)
 }

middleAge(persons)
  
// Mike
function proprietarioAnim(){
  return persons.filter(person=>(person.petName)).map(person=>`${person.name} ${person.surname} ha un animale che si chiama ${person.petName}`)
};

console.log(proprietarioAnim())

// Kathreen
const ageSorted = (array = []) => array.sort((a, b) => {return a.age - b.age}).map(person =>`${person.name}, ${person.age}`)
console.log(ageSorted(persons))
