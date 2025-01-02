
//---------------------- Functional Programming ---------------------------//
// let name = "Jhankar mahbub vai ";
// let role = "CEO";

// function ph_employee(x) {
//   return `${x} is 21 years old`;
// }
// function getRole(x, y) {
//   return `${x} is ${y} of Programming hero `;
// }

// console.log(ph_employee(name));
// console.log(getRole(name, role));


















//---------------------- OOP ---------------------------//

const jhankarMahbub = {
  name: "Jhankar Mahbub Vai",
  age: 21,
  role: "CEO",
  employee() {
    return `${this.name} is a Hero`;
  },
  employee_age() {
    return `${this.name} is  ${this.age} years old `;
  },
};

console.log(jhankarMahbub.employee());
console.log(jhankarMahbub.employee_age()); 