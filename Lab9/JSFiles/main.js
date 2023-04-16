"use strict";

import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

let persons = [
  new Person("Ana Smith", new Date("1998-12-15")),
  new Person("Bob Jone", new Date("1945-11-16")),
  new Person("Carlos Slim Helu", new Date("1976-09-24")),
];

for (let person of persons) {
  console.log(person.toString());
}

let emp1 = new Employee("Jim Hanson", new Date("1989-01-13"), 245990.00, new Date("2008-12-15"));

emp1.doJob("Software Engineer");
