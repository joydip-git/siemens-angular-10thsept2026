import { Developer } from "./models/developer";
import { Employee } from "./models/employee";
import { Hr } from "./models/hr";

const employees: Employee[] = []

employees.push(
    new Developer(1, "Daniel", 1000, 2000, 3000, 4000),
    new Hr(2, "Siddharth", 1500, 2500, 3500, 4500)
)

for (const employee of employees) {
    employee.calculateSalary();
    //console.log(`Salary of ${employee.name} is ${employee.totalSalary}`);
}
//filter the array of employees and produce an output of those employees whose salary is more than a threshold value (you decide)
//again apply another logic on the previous step output to produce an array of objects with only employee name and total salary
//appaly the logic on the previous output to print the name and salary of those objects

// for (const index in employees) {
//     const emloyee = employees[index];
// }
