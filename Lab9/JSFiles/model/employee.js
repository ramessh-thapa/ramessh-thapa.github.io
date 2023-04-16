"use strict";

import { Person } from "./person.js";

export class Employee extends Person {
  constructor(name, dateOfBirth, salary, hireDate) {
    super(name, dateOfBirth);
    this.salaryAmount = salary;
    this.dateOfHire = hireDate;
  }

  get salary() {
    return this.salaryAmount;
  }

  set salary(salary) {
    this.salaryAmount = salary;
  }

  get hireDate() {
    return this.dateOfHire;
  }

  set hireDate(hireDate) {
    this.dateOfHire = hireDate;
  }

  doJob(jobTitle) {
    console.log(
      `${this.name} is a ${jobTitle} who earns $${this.salary.toFixed(2)}`
    );
  }
}