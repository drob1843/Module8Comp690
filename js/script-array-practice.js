//STEP 1

// let fiveFav = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto']
// console.log(fiveFav[1]);


//STEP 2

// let movies = new Array(5)

// movies[0] = 'The GodFather'
// movies[1] = 'The Matrix'
// movies[2] = 'Saving Private Ryan'
// movies[3] = 'Encanto'
// movies[4] = 'No Country for Old Men'


// console.log(movies[0]);



//STEP 3

// let movies = new Array(5)

// movies[0] = 'The GodFather'
// movies[1] = 'The Matrix'
// movies[2] = 'Saving Private Ryan'
// movies[3] = 'Encanto'
// movies[4] = 'No Country for Old Men'

// movies.splice(2,0,'Fight Club')
// console.log(movies.length)



//STEP 4

// let movies = []

// movies[0] = 'The GodFather'
// movies[1] = 'The Matrix'
// movies[2] = 'Saving Private Ryan'
// movies[3] = 'Encanto'
// movies[4] = 'No Country for Old Men'

// let movies[0]
// console.log(movies);

// leaves 0 slot as undefined



//STEP 5

// let movies = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto']

// for (let movie in movies) {
//     console.log(movies[movie]);

// }


//STEP 6

// Array.prototype.movies= () => {}

// let movies = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto', 'Jaws', 'Jurassic Park']

// for (let i of movies) {
//     console.log(i);

// }


//STEP 7

// let movies = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto', 'Jaws', 'Jurassic Park']
// movies.sort()

// for (let i of movies) {
//     console.log(i);

// }




//STEP 8

// let movies = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto']
// let leastFavMovies = ['The Proposal', 'Shawshank Redemption', 'Goal']

// console.log('Movies I like:')
// console.log('');
// for (let i of movies) {
//     console.log(i)
// }
// console.log('...');
// console.log('');
// console.log('Movies I regret Watching:');
// console.log('');
// for (let i of leastFavMovies) {
//     console.log(i)
// }
// console.log('...');




//STEP 9

// let favMovies = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto']
// let leastFavMovies = ['The Proposal', 'Shawshank Redemption', 'Goal']

// let movies = favMovies.concat(leastFavMovies)
// movies.sort().reverse()
// console.log(movies);




//STEP 10

// let favMovies = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto']
// let leastFavMovies = ['The Proposal', 'Shawshank Redemption', 'Goal']

// let movies = favMovies.concat(leastFavMovies)

// movies.sort().reverse()

// let lastMovie = movies.pop()

// console.log(lastMovie);




//STEP 11

// let favMovies = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto']
// let leastFavMovies = ['The Proposal', 'Shawshank Redemption', 'Goal']

// let movies = favMovies.concat(leastFavMovies)

// movies.sort().reverse()

// let lastMovie = movies.shift()

// console.log(lastMovie);



//STEP 12

// let favMovies = ['The Matrix', 'The Godfather', 'Saving Private Ryan', 'No Country for Old Men', 'Encanto']
// let leastFavMovies = ['The Proposal', 'Shawshank Redemption', 'Goal']

// let movies = favMovies.concat(leastFavMovies)

// let movieIndex = leastFavMovies.map((movie) => movies.indexOf(movie))

// movieIndex.reverse().forEach((index) => {
//     if (index != -1) {
//         movies.splice(index, 1, 'Avengers', 'Iron Man', 'The Hulk')
//     }
// })

// console.log(movies)


//STEP 13

// let movies = [['The Matrix',1], ['The Godfather',2], ['Saving Private Ryan',3], ['No Country for Old Men',4], ['Encanto',5]]

// movies.forEach((item) => {
//     console.log(`${item[0]}`);

// })

//STEP 14

// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']
// function showEmployee(employees) {
//     console.log('Employees:')
//     employees.forEach((employee) => {
//                console.log(employee.toUpperCase())

//     });

// }

// showEmployee(employees)

//STEP 15

// let filterValues = [58, ``,'abcd', true, null, false, 0]

// let filter  = filterValues.filter((item) => Boolean(item))
// console.log(filter);


//STEP 16

// let choices = [10, 2, 8, 43, 54, 34, 25, 7, 2, 19]

// let randomItem = (i) => {
//     let randomIndex = Math.floor(Math.random() * i.length)
//     return i[randomIndex]

// }
// console.log(randomItem(choices));

//STEP 17
// let choices = [10, 2, 8, 43, 54, 34, 25, 7, 2, 19]

// let highNum = (i) => {

//     return Math.max(...i)
    
// }
// console.log(highNum(choices));
