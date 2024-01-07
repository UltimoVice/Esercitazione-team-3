const persons = [{name : "Riccardo", surname : "Grassi", age : 27, city : "Livorno", hobby : "Gym", favoriteFood : "Cacciucco", favoriteVideoGame : "Skyrim", favoriteFilm : "Old boy",
favoriteBook : "Neuromante", petName : "Ecate"}]

 const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
 const middleAge = totalAge / persons.length;