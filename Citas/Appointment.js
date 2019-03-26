export default class Appointment {
  constructor(appointment) {
    this._name = appointment.name.toUpperCase();
    this._aptDate = appointment.aptDate;
    this._aptTime = appointment.aptTime;
  }

  get name() {
    return this._name;
  }

  get aptDate() {
    return this._aptDate;
  }

  get aptTime() {
    return this._aptTime;
  }

  getDaysLeft() {
    let aDay = 24 * 60 * 60 * 1000;
    let differenceMs = this._aptDate - new Date();
    let daysLeft = Math.trunc(differenceMs / aDay);
    if (daysLeft >= 0) {
      return daysLeft;
    } else {
      return "-";
    }
  }
}
