export default class Expense {
  constructor(expense) {
    this._expDate = expense.expDate;
    this._quantity = expense.quantity;
    this._concept = expense.concept;
    this._type = expense.type;
  }

  get expDate() {
    return this._expDate;
  }

  get quantity() {
    return this._quantity;
  }

  get concept() {
    return this._concept;
  }

  get type() {
    return this._type;
  }  
}
