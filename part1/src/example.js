const animals = [
{name : 'cone', species : 'conejo'},
{name : 'Hela', species : 'perro'},
{name : 'Negan', species : 'perro'},
{name : 'Lebron', species : 'perro'},
{name : 'Michi', species : 'gato'},
{name : 'Nemo', species : 'pez'}
]

var names = animals.map((x) => x.name)
console.log(names)


// var names = animals.map(function(animal){ return animal.name + ' es un ' + animal.species
// })





// esta no va 
// var names = []
// for (var i = 0; i < animals.length; i++){
//     names.push(animals[i].name)
// }






// var IsDog = function (animal){
//     return animal.species === 'perros'
// }

// var perros = animals.filter(isDog)
// var otherAnimals = animals.reject(isDog)



// este metodo no va 
// var perros = []
// for (var i = 0; i< animals.length; i++) {
//     if(animals[i].species === ' perro')
//         perros.push(animals[i])
// }



var orders = [
    {amount :250},
    {amount :400},
    {amount :250},
    {amount :400}
]

 var totalAmount =orders.reduce(function(sum, order){
    console.log("hola", sum, order)
    return sum + order.amount
 },0)




// var totalAmount = 0
// for ( var i=0; i < orders.length; i++ ){
//     totalAmount += orders[i].amount
// } 


console.log(totalAmount)
