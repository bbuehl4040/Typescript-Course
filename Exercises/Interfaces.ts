
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'billy',
    age: 25,
    speak(text: string) {
        console.log('Hello: ' + text);
    },
    spend(money: number) {
        console.log('Hey: ' + money);
        return money;
    }
}

const greetPerson = (p: IsPerson) => {
    console.log(p.name);
}

greetPerson(me);