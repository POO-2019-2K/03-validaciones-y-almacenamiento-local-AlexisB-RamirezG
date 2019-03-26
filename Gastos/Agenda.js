import Expense from "./Expense.js";

export default class Agenda {
  constructor(tableAgenda, tableStats) {
    this._tableAgenda = tableAgenda;
    this._tableStats = tableStats;
    this._expenses = [];

    this._expTransport = 0;
    this._expHosting = 0;
    this._expFood = 0;
    this._expOthers = 0;

    this._initTables();
  }

  _initTables() {
    let expenses = JSON.parse(localStorage.getItem("expenses"));

    if (expenses === null) {
      return
    }
    expenses.forEach((expense, index) => {
      expense.expDate = new Date(expense.expDate);
      this._showInTable(new Expense(expense));
    });
  }

  _showInTable(expense) {
    let row = this._tableAgenda.insertRow(-1);

    let cellExpDate = row.insertCell(0);
    let cellType = row.insertCell(1);
    let cellConcept = row.insertCell(2);
    let cellCost = row.insertCell(3);

    cellExpDate.innerHTML = expense.expDate.toLocaleDateString();
    cellType.innerHTML = expense.type;
    cellConcept.innerHTML = expense.concept;
    cellCost.innerHTML = "$" + expense.quantity;

    if ((expense.type === "Transport") || (expense.type === "transport")) {
      this._expTransport = parseInt(this._expTransport + expense.quantity);
    } else if ((expense.type === "Hosting") || (expense.type === "hosting")) {
      this._expHosting = parseInt(this._expHosting + expense.quantity);
    } else if ((expense.type === "Food") || (expense.type === "food")) {
      this._expFood = parseInt(this._expFood + expense.quantity);
    } else {
      this._expOthers = parseInt(this._expOthers + expense.quantity);
    }

    this._tableStats.rows[1].cells[1].innerHTML = this._expTransport;
    this._tableStats.rows[2].cells[1].innerHTML = this._expHosting;
    this._tableStats.rows[3].cells[1].innerHTML = this._expFood;
    this._tableStats.rows[4].cells[1].innerHTML = this._expOthers;

    let objExpense = {
      expDate: expense.expDate,
      type: expense.type,
      quantity: expense.quantity,
      concept: expense.concept
    }

    this._expenses.push(objExpense);
  }

  addExpense(expense) {
    this._showInTable(expense);
    localStorage.setItem("expenses", JSON.stringify(this._expenses));
    console.log(localStorage.getItem("expenses"));
  }
}
