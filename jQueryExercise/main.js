//console.log ($(".liChild").text())
//exe1+2
// const addNewName = function (){
//     let tempo = $("#theText").val()
//     $("#listFather").append(`<li class="liChild">${tempo}</li>`)
//     $("#theText").val("")
// } 


// $("#theButton").on("click",addNewName)
// $("#listFather").on("click",".liChild",function () {
//     $(this).remove()
// })

//exe3 

let boxa = `<div class="box"></div>`

$("body").append(boxa)
$("body").append(boxa)


$("body").on("mouseleave",".box", function(){
    $(this).css("background-color","green")
})

