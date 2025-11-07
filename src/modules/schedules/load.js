import { scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js";
import {schedulesShow} from "../schedules/show.js"

const selectedDate =  document.getElementById("date");
export async function schedulesDay() {
  //Obter a data do input
  const date = selectedDate.value;

  //busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // exibe os agendamentos
  schedulesShow ({dailySchedules})

  //Rederiza as horas disponiveis
  hoursLoad({date, dailySchedules});
}
