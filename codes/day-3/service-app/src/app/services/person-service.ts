import { Person } from "../models/person";

export interface ServiceContract {
    getPeople(): Person[];
}

export class PersonService implements ServiceContract {
    constructor() {
        console.log('service created...');
    }
    private records = [
        {
            id: 2,
            name: 'anil',
            salary: 3000,
            currency: 'USD'
        },
        {
            id: 1,
            name: 'sunil',
            salary: 2000,
            currency: 'USD'
        },
        {
            id: 3,
            name: 'joydip',
            salary: 1000,
            currency: 'USD'
        }
    ]
    getPeople(): Person[] {
        return [...this.records];
    }
}