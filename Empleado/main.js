import Agenda from "./Agenda.js";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let agenda = new Agenda(document.querySelector("#employees"), document.querySelector("#stats"));

    document.querySelector("#bttnPerform").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");
      if (form.checkValidity()) {
        let employeeID = document.querySelector("#employeeID").value;
        let name = document.querySelector("#name").value;
        let wage = document.querySelector("#wage").value;
        let bDate = document.querySelector("#birthDate").value;
        bDate = bDate.split("-");

        let birthDate = new Date(bDate[0], bDate[1] - 1, bDate[2]);
        
        let hDate = document.querySelector("#hiringDate").value;
        hDate = hDate.split("-");

        let hiringDate = new Date(hDate[0], hDate[1] - 1, hDate[2]);

        let objEmployee = {
          employeeID: employeeID,
          name: name,
          wage: wage,
          birthDate: birthDate,
          hiringDate: hiringDate
        }

        let employee = new Employee(objEmployee);

        agenda.addEmployee(employee);
      }
    });
  }
}

let m = new Main();
