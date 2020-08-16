//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles")    
//~~it will print out 8 times runnung and then it will print "finish runnung 8 miles." 
//~~then it will provide an error on row 16 cuz distance is not in the outside scope
// test - good [=
    //===================================================================================//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}
//~~ i think it will print an error cuz cowSount is never colled out.
//test - good [=
//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)
//~~no problem here it will print out - "served a special ${item from the allOrders arry}" and then - "finish serving all the order fish, lettece plate, curious cheese"
//test - good[=

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()

//~~ error here cuz seed is not in the scope of the plant func.
//test - good [=
//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

//~~ ok so go inside the func with "Lucius" then the for loop it will iterete and eventually return found true 
//~~ then eventually it will print out - "we found the ragamuffin"
//test - wrong !!! my mastike was that the decleretion on the found is only inside the for loop and there for not avilabole outside..

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}
//~~ it wiil go insite the function and return isEnough true and then print finally, sheesh
//test = good [=
