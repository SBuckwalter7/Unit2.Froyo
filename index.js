//User recieves prompt when opening website, and enters flavos as designated

//let flavors=["vanilla, vanilla, vanilla, strawberry, coffee, coffee"]
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
