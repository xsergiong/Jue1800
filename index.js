console.log("Hello world");
console.log(2+3);
console.log(2-3);
console.log(6/3);
console.log(6*3);

let name = 'ariana';
console.log(name);

name = prompt("What's your name?");
console.log(name);

let n1 = name = prompt("What's your first number?");
let n2 = name = prompt("What's your second number?");
console.log(n1*n2);

let rNum = Math.floor(Math.random() * (100 - 1) + 1);
let pNum = prompt("Tell me a number from 1 to 100");

alert(rNum);

if(pNum == rNum){
    console.log("You're correct!")
}
else{
    while(pNum != rNum){
        console.log("Wrong!");
        pNum = prompt("Tell me a number from 1 to 100");
    }
    console.log("You're correct!")
}


let list = ['apples', 'pears', 'bananas', 'strawberries'];

console.log("I need to buy", list[0] + ",", list[1] + ",", list[2], "and", list[3]);

const Ariana = {
    "name":"Ariana",
    "occupation":"singer/actress/businesswoman",
    "age":31,
    "height":153
}

console.log(Ariana.name, "is a", Ariana.occupation, "who is", Ariana.age, "years old and", Ariana.height, "cm tall");