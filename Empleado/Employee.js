export default class Employee {
  constructor(employee) {
    this._name = employee.name.toUpperCase();
    this._employeeID = employee.employeeID;
    this._birthDate = employee.birthDate;
    this._hiringDate = employee.hiringDate;
    this._wage = employee.wage;
  }

  get name() {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }

  get hiringDate() {
    return this._hiringDate;
  }

  get employeeID() {
    return this._employeeID;
  }

  get wage() {
    return this._wage;
  }

  getAge() {
    let aYear = 24 * 60 * 60 * 1000 * 365;
    let differenceMs = new Date() - this._birthDate;
    let age = Math.trunc(differenceMs / aYear);
    return age;
  }

  getSeniorship() {
    let aYear = 24 * 60 * 60 * 1000 * 365;
    let differenceMs = new Date() - this._hiringDate;
    let seniorship = Math.trunc(differenceMs / aYear);
    return seniorship;
  }
}
