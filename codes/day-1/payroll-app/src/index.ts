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
    console.log(`Salary of ${employee.name} is ${employee.totalSalary}`);
}

// for (const index in employees) {
//     const emloyee = employees[index];
// }
