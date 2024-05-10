//My Attempt ---------------------------------------------------------

//User recieves prompt when opening website, and enters flavos as designated

//let flavors=["vanilla, vanilla, vanilla, strawberry, coffee, coffee"]


/** -------------------------My Answer Starts Here
var flavors=["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]
let openingMessage= prompt("Please enter a list of flavors", flavors);

//I had NO idea how to count the words and did a ton of googling to find this equation below
//Still not entirely sure how it works, but it works LOL

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

//Once we count the flavors, below is the output to show the results in the console
console.log('Vanilla')
    console.log(getOccurrence(flavors, "vanilla"));  // 3

console.log('Strawberry')
    console.log(getOccurrence(flavors, "strawberry"));  // 1

console.log('Coffee')
    console.log(getOccurrence(flavors, "coffee"));  // 2
----------------------------My answer stops here*/




//Teacher Version -------------------------------------------------

let defaultFlavors= "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
const input = prompt("Enter a list of froyo flavors", defaultFlavors)

//if you dont put the "space" between the "" it will break apart and count the letters not the words.. weiiirrddd lol
const flavors = input.split(" ")

const flavorTotals = {}

flavors.forEach((flavor)=>{
//if we already have that flavor in object
            //add 1
        //otherwise
            //create a new key value pair
            //"keyName" = flavor
            // value = 1
    if(flavor in flavorTotals){
        //objectName["keyName"] = newValue
        flavorTotals[flavor] ++
        //add one to existing flavor count

    }else {
        //objectName["new key name"] = initial value
        flavorTotals[flavor] = 1;
        //create new key value pair and set to 1
    }

})

console.table(flavorTotals)



//objectName["new key name"] = initial value
//objectName["keyName"] = newValue
//objectName["keyName"]++

//if (keyName in objectName){ console.log("it exists!!")}


// to create a new value pair
//objectName["new key name"] = initial value

//updating the value of existing property in object
//objectName["keyName"] = newValue
//objectName["keyName"]++

//to check if keyname already exists
// if (keyName in objectName){ console.log("it exists!!")}
