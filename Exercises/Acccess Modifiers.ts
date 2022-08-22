class Customer {
    // private name: string;   // read and change only from inside class
    // public age: number;     // read and change from outside class
    // readonly details: string | undefined; // readonly everywhere

    // constructor(_name: string, _age: number, _details?: string) {
    //     this.name = _name;
    //     this.age = _age;
    //     this.details = _details;
    // }

    constructor(
        readonly name: string,
        private age: number,
        public details: string
    ){};
}

