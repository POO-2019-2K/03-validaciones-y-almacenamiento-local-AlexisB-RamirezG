import Agenda from "./Agenda.js";
import Expense from "./Expense.js";

class Main {
  constructor() {
    let agenda = new Agenda(document.querySelector("#agenda"), document.querySelector("#stats"));

    document.querySelector("#bttnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");
      if (form.checkValidity()) {
        let type = document.querySelector("#type").value;
        let concept = document.querySelector("#concept").value;
        let quantity = document.querySelector("#quantity").value;
        let eDate = document.querySelector("#expDate").value;
        eDate = eDate.split("-");

        let expDate = new Date(eDate[0], eDate[1] - 1, eDate[2]);

        let objExpense = {
          type: type,
          concept: concept,
          quantity: quantity,
          expDate: expDate
        }

        let expense = new Expense(objExpense);

        agenda.addExpense(expense);
      }
    });
  }
}

let m = new Main();
