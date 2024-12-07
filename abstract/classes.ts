// ! Created with codeium (AI)

abstract class Employee
{
    constructor( protected name: string, protected id: number ) {}

    abstract calculateSalary(): number;

    getInfo(): string
    {
        return `Employee ID: ${this.id}, Name: ${this.name}`;
    }
}

class FullTimeEmployee extends Employee
{
    constructor(name: string, id: number, private annualSalary: number)
    {
        super(name, id);
    }

    calculateSalary(): number
    {
        return this.annualSalary / 12;
    }
}

class PartTimeEmployee extends Employee
{
    constructor(name: string, id: number, private hourlyRate: number, private hoursWorked: number)
    {
        super(name, id);
    }

    calculateSalary(): number
    {
        return this.hourlyRate * this.hoursWorked;
    }
}

// Uso
const fullTime = new FullTimeEmployee("John Doe", 1, 60000);
console.log(fullTime.getInfo());
console.log(`Monthly Salary: $${fullTime.calculateSalary()}`);

const partTime = new PartTimeEmployee("Jane Smith", 2, 15, 80);
console.log(partTime.getInfo());
console.log(`Monthly Salary: $${partTime.calculateSalary()}`);