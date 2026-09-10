const x = 10
console.log(x);

function add(a: number, b: number): number {
    return a + b
}

const res = add(12, 14)
console.log(res);

class Person {
    /*
    private _id: number;
    private _name: string;
    private _salary: number;

    constructor(_id: number, _name: string, _salary: number) {
        this._id = _id
        this._name = _name
        this._salary = _salary
    }*/

    constructor(private _id: number, private _name: string, private _salary: number) {

    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    print() {
        return `Id=${this._id}, Name=${this._name}, Salary=${this._salary}`
    }
}

class Trainer extends Person {
    //private _subject: string;
    constructor(_id: number, _name: string, _salary: number, private _subject: string) {
        super(_id, _name, _salary)
        //this._subject = _subject
    }
    public get subject(): string {
        return this._subject;
    }
    public set subject(value: string) {
        this._subject = value;
    }
    print(): string {
        return `${super.print()}, Subject=${this._subject}`
    }
}
