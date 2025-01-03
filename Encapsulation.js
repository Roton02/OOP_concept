class PH_Employee {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
  employee() {
    return `${this.name} is a Hero`;
  }
  employee_age() {
    return `${name} is  ${this.age} years old `;
  }
}
const JhankarBhai = new PH_Employee("Jhankar", 21, "CEO");
const RakibBhai = new PH_Employee("Rakib", 18, "COO");

console.log(JhankarBhai.role) ;





