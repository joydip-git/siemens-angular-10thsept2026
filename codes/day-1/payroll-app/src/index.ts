import { Developer as Dev } from "./models/developer";
import { Employee } from "./models/employee";
import { Hr } from "./models/hr";

// import * as all from './models/developer'
// console.log(all);

const employees: Employee[] = []

employees.push(
    new Dev(1, "Daniel", 1000, 2000, 3000, 4000),
    new Hr(2, "Siddharth", 1500, 2500, 3500, 4500)
)

// employees
//     .forEach(
//         (e) => e.calculateSalary()
//     )
//filter the array of employees and produce an output of those employees whose salary is more than a threshold value (you decide)
//again apply another logic on the previous step output to produce an array of objects with only employee name and total salary
//appaly the logic on the previous output to print the name and salary of those objects

employees
    .map(e => {
        e.calculateSalary()
        return e
    })
    .filter(e => e.totalSalary > 10000)
    .map(e => ({
        empname: e.name, empsalary: e.totalSalary
    })
    )
    .forEach(o => console.log(`${o.empname}:${o.empsalary}`))
