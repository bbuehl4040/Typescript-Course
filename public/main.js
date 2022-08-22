// const anchor = document.querySelector("a")!; // add "!" after to assert object exists
// console.log(anchor.href);
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { DivTemplate } from './classes/DivTemplate.js';
const form = document.querySelector('#financeForm');
const typeInput = form.querySelector('#typeInput');
const toFromInput = form.querySelector('#toFromInput');
const detailsInput = form.querySelector('#detailsInput');
const amountInput = form.querySelector('#amountInput');
const div = document.getElementById('output');
const list = new DivTemplate(div);
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default reload
    let doc;
    if (typeInput.value === 'invoice') {
        doc = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    else {
        doc = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    list.render(doc, typeInput.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Dave", age: 24 });
let docTwo = {
    uid: 1,
    resourceName: 'person',
    data: 'billy'
};
let docThree = {
    uid: 3,
    resourceName: 'person',
    data: ['dave', 'colin', 'james']
};
console.log(docOne);
console.log(docTwo);
console.log(docThree);
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
console.log(ResourceType.BOOK);
console.log(ResourceType.AUTHOR);
// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
let tup = [40, 'hello', true];
