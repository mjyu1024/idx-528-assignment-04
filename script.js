const name = "Mike";

let age = 24;

console.log( age * 5 );

const last_name = "Liu";

let full_name = name + "," + " " + last_name;

console.log(full_name);

// Full name is required to be last name, first.

let fruit = [
    "Apples",
    "Oranges",
    "Pears",
    "Bananas",
    "Cherries",
];

let x = fruit.length;

if ( x < 5 ) {
        console.log("Only a few fruits!");    
} else if ( x > 5 ) {
        console.log("Nice list of fruits.");    
} else {
        console.log("FRUUUITS!!");    
}

let first_item = fruit[0];

let prize = {
    Apples: "$0.99",
    Oranges: "$1.05",
    Pears: "$1.50",
    Bananas: "$0.49",
    Cherries: "$3.01",
}

switch (first_item) {
    case first_item = "Apples":
        console.log(prize.Apples);
        break;

    case first_item = "Oranges":
        console.log(prize.Oranges);
        break;
    
     case first_item = "Pears":
        console.log(prize.Pears);
        break;   

    case first_item = "Bananas":
        console.log(prize.Bananas);
        break;  

    case first_item = "Cherries":
        console.log(prize.Cherries);
        break;  
}
