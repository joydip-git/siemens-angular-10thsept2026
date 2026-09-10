export class Employee {
    //protected salary: number | undefined;
    //protected salary?: number;
    protected salary = 0;
    constructor(public id: number, public name: string, public basicPayment: number, public daPayment: number, public hraPayment: number) { }

    get totalSalary() {
        return this.salary
    }
    calculateSalary() {
        this.salary = this.basicPayment + this.daPayment + this.hraPayment
    }
}