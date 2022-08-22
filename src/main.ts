// const anchor = document.querySelector("a")!; // add "!" after to assert object exists
// console.log(anchor.href);


import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { DivTemplate } from './classes/DivTemplate.js';

const form = document.querySelector('#financeForm') as HTMLFormElement;

const typeInput = form.querySelector('#typeInput') as HTMLSelectElement;
const toFromInput = form.querySelector('#toFromInput') as HTMLInputElement;
const detailsInput = form.querySelector('#detailsInput') as HTMLInputElement;
const amountInput = form.querySelector('#amountInput') as HTMLInputElement;

const div = document.getElementById('output') as HTMLDivElement;
const list = new DivTemplate(div);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // prevent default reload

    let doc: HasFormatter;
    if (typeInput.value === 'invoice') {
        doc = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    } else {
        doc = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }

    list.render(doc, typeInput.value, 'end');

});

// Generics
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: "Dave", age: 24});


// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

let docTwo: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'billy'
}

let docThree: Resource<string[]> = {
    uid: 3,
    resourceName: 'person',
    data: ['dave', 'colin', 'james']
}

console.log(docOne);
console.log(docTwo);
console.log(docThree);


// Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

console.log(ResourceType.BOOK);
console.log(ResourceType.AUTHOR);

// tuples
let arr = ['ryu', 25, true];
arr[0] = false;

let tup: [number, string, boolean] = [40, 'hello', true];