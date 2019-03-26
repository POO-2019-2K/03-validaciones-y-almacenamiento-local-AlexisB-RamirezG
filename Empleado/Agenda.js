import Employee from "./Employee.js";

export default class Agenda {
  constructor(tableAgenda, tableStats) {
    this._tableAgenda = tableAgenda;
    this._tableStats = tableStats;
    this._employees = [];

    this._overWage = 0;
    this._normalWage = 0;
    this._belowWage = 0;
    this._avrgWage = 0;
    this._avrgAge = 0;
    this._sumWage = 0;
    this._numEmployees = 0;
    this._sumAge = 0;

    this._initTables();
  }

  _initTables() {
    let employees = JSON.parse(localStorage.getItem("employees"));

    if (employees === null) {
      return
    }
    employees.forEach((employee, index) => {
      employee.birthDate = new Date(employee.birthDate);
      employee.hiringDate = new Date(employee.hiringDate);
      this._showInTable(new Employee(employee));
    });
  }

  _showInTable(employee) {
    let row = this._tableAgenda.insertRow(-1);

    let cellEmployeeID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellBirthDate = row.insertCell(2);
    let cellHiringDate = row.insertCell(3);
    let cellWage = row.insertCell(4);
    let cellAge = row.insertCell(5);
    let cellSeniorship = row.insertCell(6);

    cellEmployeeID.innerHTML = employee.employeeID;
    cellName.innerHTML = employee.name;
    cellBirthDate.innerHTML = employee.birthDate.toLocaleDateString();
    cellHiringDate.innerHTML = employee.hiringDate.toLocaleDateString();
    cellWage.innerHTML = employee.wage;
    cellAge.innerHTML = employee.getAge();
    cellSeniorship.innerHTML = employee.getSeniorship();

    if (employee.wage <= 10000) {
      this._belowWage++;
    } else if (employee.wage < 10000 && employee.wage <= 20000) {
      this._normalWage++;
    } else if (employee.wage > 20000) {
      this._overWage++;
    }

    this._numEmployees++;
    this._sumWage += employee.wage;

    this._avrgWage = this._sumWage / this._numEmployees;

    this._sumAge += employee.getAge(); 
    
    this._avrgAge = this._sumAge / this._numEmployees;

    console.log(employee.wage);
    
    this._avrgWage = Number(employee.wage);

    this._tableStats.rows[1].cells[1].innerHTML = this._belowWage;
    this._tableStats.rows[2].cells[1].innerHTML = this._normalWage;
    this._tableStats.rows[3].cells[1].innerHTML = this._overWage;
    this._tableStats.rows[4].cells[1].innerHTML = this._avrgWage;
    this._tableStats.rows[5].cells[1].innerHTML = this._avrgAge;

    let objEmployees = {
      employeeID: employee.employeeID,
      name: employee.name,
      wage: employee.wage,
      birthDate: employee.birthDate, 
      hiringDate: employee.hiringDate
    }

    this._employees.push(objEmployees);
  }

  addEmployee(employee) {
    this._showInTable(employee);
    localStorage.setItem("employees", JSON.stringify(this._employees));
    console.log(localStorage.getItem("employees"));
  }
}
