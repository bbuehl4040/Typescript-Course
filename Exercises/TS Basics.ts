// 0. Variable types (number, string, boolean, etc. are immutable)
let character = 'Mario';
let age = 30;
let isBlackBelt = false;

// type check during development
const circ = (diameter: number) => {
    return diameter * Math.PI;
}

let res = circ(7.5);


// 1. Arrays can only have one type
let names = ['luigi', 'mario', 'peach']
names.push('toad');
// names.push(3); // cannot append numbers to string array
// names[0] = 3; // cannot add number to string array
let numbers = [10, 20, 30, 40];
numbers.push(50);

// 2. Mixed arrays can have multiple types
let mixed = ['ken', 'donald', 'dave', 15, 11];

mixed.push('colin');
mixed.push(4);

// 3. Object values must always be of same type and object structure is immutable
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

// 4. Explicit types, union types
let man: string;
let years: number;
let isLoggedIn: boolean;
let uid: string|number;
let ninjas: string[]; // OR >> let ninjas: string[] = [];
let mixedArr: (string|number|boolean)[] = [];
mixedArr.push('dave', true, 30);
let ninjaOne: object;
ninjaOne = { name: 'Yoshi', age: 300 };
let ninjaTwo: {name: string, age: number, color: boolean}

// 5. Any types
let myAge: any = 25;

console.log("test");
console.log("test2");