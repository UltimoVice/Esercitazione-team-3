const persons = [ { name : 'Marcello', surname : 'Sciulara', age : 25, city : 'Mezzojuso', hobby : 'Leggere', favoriteFood : 'Pizza', favoriteVideoGame : 'DS3', favoriteFilm : 'V per vendetta', favoriteBook : 'Nella quarta dimensione', petName : '' }, ];

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