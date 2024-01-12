const persons = [
    {name : "Riccardo", surname : "Grassi", age : 27, city : "Livorno", hobby : "Gym", favoriteFood : "Cacciucco", favoriteVideoGame : "Skyrim", favoriteFilm : "Old boy", favoriteBook : "Neuromante", petName : "Ecate"},
    {name : 'Marcello', surname : 'Sciulara', age : 25, city : 'Mezzojuso', hobby : 'Leggere', favoriteFood : 'Pizza', favoriteVideoGame : 'DS3', favoriteFilm : 'V per vendetta', favoriteBook : 'Nella quarta dimensione', petName : '' },
    {name : 'Kathreen', surname : 'Espiritu', age : 27, city : 'Milano', hobby : 'Giadinaggio', favoriteFood : 'Lasagna', favoriteVideoGame : '', favoriteFilm : 'Titanic', favoriteBook : '', petName : '' },
]

const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
const middleAge = totalAge / persons.length;

function alphabeticalOrder(a, b){
    if(a.surname < b.surname) {
        return -1;
    } else if (a.surname > b.surname) {
        return 1;
    } else {
        return a.name.localeCompare(b.name)
    }
}

persons.sort(alphabeticalOrder);

persons.forEach(function(person) {
    console.log(`${person.surname} ${person.name}`);
});

const ageSorted = persons.sort((a, b) => {return a.age - b.age})
console.log(ageSorted)
  