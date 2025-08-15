// Exercise 10 - BUSINESS NAME GENERATOR
/* Create a business name generator by comibining list of adjectives, shop name and another word.
    Adjectives:
        Crazy
        Amazing
        Fire
    Shop name:
        Engine
        Foods
        Garments
    Another word:
        Bros
        Limited
        Hub
*/

console.log("Welcome to the Business Name Generator !")

function adjectives() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let num1 = Math.random() * 100;
    if (num1 <=30) {
        return a;
    } else if (num1 <=60) {
        return b;
    } else {
        return c;
    }
}

function shop_name() {
    let a = "Engine";
    let b = "Foods";
    let c = "Garments";
    let num1 = Math.random() * 100;
    if (num1 <=30) {
        return a;
    } else if (num1 <=60) {
        return b;
    } else {
        return c;
    }
}

function another_word() {
    let a = "Bros";
    let b = "Limited";
    let c = "Hub";
    let num1 = Math.random() * 100;
    if (num1 <=30) {
        return a;
    } else if (num1 <=60) {
        return b;
    } else {
        return c;
    }
}

console.log(`Your generated business name is: ${adjectives()} ${shop_name()} ${another_word()}`)




// let num1 = Math.random() * 100;
// console.log(num1)
// if (num1 <=30) {
//     let adj = "Crazy";
// } else if (num1 <=60) {
//     let adj = "Amazing";
// } else {
//     let adj = "Fire";
// }
// let adj1 = adj;
// console.log(adj1);

// let num2 = Math.random() * 100;
// console.log(num2)
// if (num2 <=30) {
//     let shop = "Engine";
// } else if (num2 <=60) {
//     let shop = "Foods";
// } else {
//     let shop = "Garments";
// }

// let num3 = Math.random() * 100;
// console.log(num3)
// if (num3 <=30) {
//     let another_word = "Bros";
// } else if (num3 <=60) {
//     let another_word = "Limited";
// } else {
//     let another_word = "Hub";
// }

// console.log(`Your generated business name is ${adj} ${shop} ${another_word} !`)