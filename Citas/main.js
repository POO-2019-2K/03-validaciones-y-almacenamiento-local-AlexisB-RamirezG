import Agenda from "./Agenda.js";
import Appointment from "./Appointment.js";

class Main {
  constructor() {
    let agenda = new Agenda(document.querySelector("#agenda"), document.querySelector("#stats"));

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");
      if (form.checkValidity()) {
        let name = document.querySelector("#name").value;
        let time = document.querySelector("#aptTime").value;
        let aDate = document.querySelector("#aptDate").value;
        aDate = aDate.split("-");

        let aptDate = new Date(aDate[0], aDate[1] - 1, aDate[2]);

        let objAppointment = {
          name: name,
          aptDate: aptDate,
          aptTime: time
        }

        let appointment = new Appointment(objAppointment);

        agenda.addAppointment(appointment);
      }
    });
  }
}

let m = new Main();
