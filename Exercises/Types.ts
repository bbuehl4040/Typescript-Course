type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum };

let greet: Function;

greet = (user: objWithName) => {
    console.log("hello again" + user);
}

const add = (a: number, b: number, c: number|string = 10, d?: number|boolean) => {
    console.log(a + b);
    console.log(c);
    console.log(d);
    // returns void (inferred type) == returns no value == complete lack of any value
}

add(5, 10);

const minus = (a: number, b: number): number => {
    return a - b; // type == number
}

let result = minus(10, 7);