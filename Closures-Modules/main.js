// const createPerson = function(name, age){
//     const person = {
//         personName: name, 
//         personAge: age
//     }

//     return person
// }

// const person = createPerson("Elon", 42)
// console.log(person)

// const mathOperations = function(){
//     const add = function(x, y){
//         return x + y
//     }
//     return add
//}

// let tempo = mathOperations ()
// console.log(tempo(5,7))

// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!

// //spot1 
// const family = function () {
//     let members = []
//     const birth = function (name) {
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// let giveBirth = family()
// giveBirth("ddaa")
// giveBirth("bbaaaa")
// giveBirth("ascsac")

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//         add: add,
//         sub:subtract,
//         mul:multiply,
//         diva:divide
//     }
// }

// const m = mathOperations()

// console.log(m.add(13,29))

// console.log(m.mul(1.75,24))

// console.log(m.mul(7,m.diva(36,6)))

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('Dani')
// usersModule.addUser('TheSofer')
// usersModule.listUsers()


//exe1 
// const StringFormatter = function () {


//     const capitalizeFirst = function (stringy) { 
//         console.log(stringy[0].toUpperCase() + stringy.slice(1).toLowerCase())
//     }

//     const skewerCase = function (stringy) {
//         console.log(stringy.replace(" ","-"))
//     }

//     return {
//         capitalizeFirst,
//         skewerCase
//     }
// }

// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box

//exe2 
// const Bank = function () {
//     let _money = 500

//     const depositCash = function (cash) {
//         _money+=cash
//     }

//     const checkBalance = function () {
//         console.log(_money)
//     }

//     return {
//         deposit: depositCash,
//         showBalance: checkBalance
//     }


// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950


//exe3 


// const SongsManager = function () {
//     let songs = { }
//     let toAdd = "https://www.youtube.com/watch?v="

//     const addSongTo = function (songName,url) {
//         let index = url.indexOf("=")
//         let newRL = url.slice(0,index)
//         //console.log(newRL)
//         songs[songName] = newRL
//     }

//     const getSongUrl = function (songName) {
        
//         console.log(toAdd + songs[songName])
//     }

//     return {
//         addSong: addSongTo,
//         getSong: getSongUrl
//     }
// }

// const songsManager = SongsManager()
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

// songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
