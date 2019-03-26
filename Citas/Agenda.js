import Appointment from "./Appointment.js";

export default class Agenda {
  constructor(tableAgenda, tableStats) {
    this._tableAgenda = tableAgenda;
    this._tableStats = tableStats;
    this._appointments = [];

    this._monApt = 0;
    this._tueApt = 0;
    this._wedApt = 0;
    this._thuApt = 0;
    this._friApt = 0;
    this._satApt = 0;
    this._sunApt = 0;

    this._initTables();
  }

  _initTables() {
    let appointments = JSON.parse(localStorage.getItem("appointments"));

    if (appointments === null) {
      return
    }
    appointments.forEach((appointment, index) => {
      appointment.aptDate = new Date(appointment.aptDate);
      this._showInTable(new Appointment(appointment));
    });
  }

  _showInTable(appointment) {
    let row = this._tableAgenda.insertRow(-1);

    let cellDate = row.insertCell(0);
    let cellHour = row.insertCell(1);
    let cellName = row.insertCell(2);
    let cellDaysLeft = row.insertCell(3);

    cellDate.innerHTML = appointment.aptDate.toLocaleDateString();
    cellHour.innerHTML = appointment.aptTime;
    cellName.innerHTML = appointment.name;
    cellDaysLeft.innerHTML = appointment.getDaysLeft();

    console.log(appointment.aptDate.getDay());

    if (appointment.aptDate.getDay() == 0) {
      this._sunApt++;
    } else if (appointment.aptDate.getDay() == 1) {
      this._monApt++;
    } else if (appointment.aptDate.getDay() == 2) {
      this._tueApt++;
    } else if (appointment.aptDate.getDay() == 3) {
      this._wedApt++;
    } else if (appointment.aptDate.getDay() == 4) {
      this._thuApt++;
    } else if (appointment.aptDate.getDay() == 5) {
      this._friApt++;
    } else if (appointment.aptDate.getDay() == 6) {
      this._satApt++;
    }


    this._tableStats.rows[1].cells[1].innerHTML = this._monApt;
    this._tableStats.rows[2].cells[1].innerHTML = this._tueApt;
    this._tableStats.rows[3].cells[1].innerHTML = this._wedApt;
    this._tableStats.rows[4].cells[1].innerHTML = this._thuApt;
    this._tableStats.rows[5].cells[1].innerHTML = this._friApt;
    this._tableStats.rows[6].cells[1].innerHTML = this._satApt;
    this._tableStats.rows[7].cells[1].innerHTML = this._sunApt;

    let objAppointment = {
      name: appointment.name,
      aptDate: appointment.aptDate,
      aptTime: appointment.aptTime
    }

    this._appointments.push(objAppointment);
  }

  addAppointment(appointment) {
    this._showInTable(appointment);
    localStorage.setItem("appointments", JSON.stringify(this._appointments));
    console.log(localStorage.getItem("appointments"));
  }
}
