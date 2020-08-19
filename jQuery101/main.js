// let heder = $('#h1')
// console.log(heder)

// console.log($)

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//     return document.getElementById(elementId)
//         }
//     }

//     console.log(myQuery("#h1"))

//$("h4").css("color","red")

// $("h1").css("color","blue")
// $(".red-div").css("color","red")
// $("li:first-child").css("color","green")
// $("li:last-child").css("color","pink")

// $("#brown-div").css("color","brown")


// $("#b1").addClass("box")
// $("#b2").addClass("box")


// console.log($("#my-input").val("sdvdsvsdvdsvsv"))
// const color = $("div").data().color  
// console.log(color) //prints #2980b9

// const datess = $("div").data()

// console.log(`The item with barcode ${datess.barcode} will expire on ${datess.expirationdate}`)

// const museOver = function() {
//     this.css("background-color","blue")
// }

// $("#justADiv").hover(function(){
//     // $("#justADiv").css("background-color","blue")
//     this.css("background-color","blue")
// })




// $("button").click(function(){
//     alert($("#my-input").val())
//     $("#my-input").val("")
// })


// $("#b1").hover(function () {
//     console.log($(this))
// })

// $(".box").hover(function(){
//     $(this).css("background-color","blue")
// })

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// console.log(aDynamicDiv)
// const elem = $(aDynamicDiv)
// console.log(elem)
// $("body").append(elem)

// const newDynamicDiv = "<div class='justA'>LALAL</div>"
// const elem2 = $(newDynamicDiv)
// $("#chack").append(elem2)

// $(".feedme").on("click", function(){
// //   console.log(this)
// //   console.log($(this))
// //   console.log($(".feedme"))
//     let divCopy = $(this) 
    
//     $("body").append(divCopy)
//   })
  
// const anyDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(anyDiv)
// console.log(elem)

// $(".feedme").append($(elem))

// const elem1 = $("#conteiner")
// const fedme = $(".feedme")
// // console.log(elem1)
// $(elem1).append($(fedme))
// $(elem1).append($(fedme))
// $(elem1).append($(fedme))
// $(elem1).append((fedme))
// $(elem1).append((fedme))
// $(elem1).append((fedme))
// $(elem1).append((fedme))
// $(elem1).append((fedme))
// $(".feedme").on("click",function () {
//     let divCopy = `<div class="feedme">${$(this).text()}</div>`
//     $("body").append(divCopy)
// })

// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }


// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]
  
//   for (name in names) {
//       $("body").append(`<div class="human">${names[name].first}-${names[name].last}</div>
//       `)
//   }


// $(".poof").on("mouseenter",function(){
//     $("p").remove(".poof")

// })


// $(".poof").hover(function(){$(".poof").remove()})



// $("button").on("click", function() {
//     $("#blogs").append(`<div class="blogss">the same text each time</div>`)
// })

// $("#blogs").on("click",".blogss",function(){
//     $(".blogss").text("blargh")
// })



// $("#blogs").on("click",function(){

// })



// const addDiv = function() {
//     $("body").append("<div class=box></div>")
//   };
  
//   $("button").on("click", function() {
//     addDiv()
//   });
  
//   $("body").on("click", ".box", function() {
//     alert("hi")
//   });




// const addDiv = function() {
//     $("body").append("<div class=box></div>");
    
//     $(".box").on("click", function() {
//       alert("hi");
//     });
//   };
  
//   $("button").on("click", function() {
//     addDiv();
//   });
  