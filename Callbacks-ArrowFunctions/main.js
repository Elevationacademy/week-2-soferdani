// let users = []
// const getDate = function () {
//     users = [{ name: "Rich"}, {name: "Morty"}]
//     console.log("Get users")
// }

// const displayData = () => {
//     console.log("going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getDate()
// // displayData()

// const getDate = ()=> {
//     setTimeout(function () {
//         users = [{ name: "Rich"}, {name: "Morty"}]
//         console.log("Get users")
//     }, 2000)
// }

// getDate()

// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()


//i think i understend what happend here [= 
// const first = function (callback) {
//     setTimeout (function(){
//         console.log ("this is first")
//         callback()
//     },3000)
// }

// const second = function () {
//     console.log ("this is second")
// }

// first (second)

// second spot chack - did it [=
// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

// const doSomthing = function () {
//     console.log("im doing somthing")
// }

// setTimeout(doSomthing,3000)

// const timer = function(){
//     console.log(new Date())
//   }
  
//spot check 3

// const timer = setInterval(function(){
//       console.log(new Date())
//     }, 1000)
    
//     const stop = () =>{clearInterval(timer)};


// const justCheck = name => console.log(`alalala ${name}`)

// justCheck("dani")

// const square = number => console.log(Math.pow(number,2))

// square(4)

// const square = number => console.log(number*number)
// square(4)

// const sami = (x,y) => x+y
// console.log(sami(2,3))

//spot chack 5 
// const getFormalTitle = (title,name) => {
//     return `${title} ${name}`
// }

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

//exe1 
// const pushPull = function (x){
//     x()
// }

// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"
  

//exe2
// const getTime = function (x) {
//     const time = new Date()
//     x(time)
// }

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//     console.log('The current time is: ' + time)

//   }
  
//   getTime(returnTime)
  
//exe3

// const logData = function (x) {
//     console.log(x)
// }

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };


  
//   displayData(alert, logData, "I like to party")
  

//exe4
// const sumIt = (first,second,third) => first+second+third
// let dani = sumIt(1,4,7)
// console.log(dani)

//exe5 
// const capitalize = stringy => stringy[0].toUpperCase() + stringy.slice(1).toLowerCase()
// console.log(capitalize("ththth"))


// const capitalize = stringy => {
//     let toReturn = ''
//     let temo = stringy.slice(1)
//     toReturn = stringy[0].toUpperCase()
//     for (i of temo) {
//       toReturn += i.toLowerCase()
//     }
//     return toReturn
// }

// console.log(capitalize("sdaHHDDDEgHG"))


// //exe6
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }

// const commentOnWeather = temp => {
//     let resu = `its ${determineWeather(temp)}`
//     console.log (resu)
// }

// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"


//exe7
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")
  


// let x = {
//     count: 12,
//     go: () => {
//         setTimeout(function () {
//             console.log(this.count)
//         }, 1500)
//     }
// }
// let temo = x.go()


// setInterval(()=>{console.log("hi")}, 2000)

