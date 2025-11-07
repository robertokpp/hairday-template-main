import { schedulesDay } from "../schedules/load"
//selecinar o input de data
const selectedDate = document.getElementById("date")

//recaregar a lista de horarios quando o input de data mudar
selectedDate.onchange = () => schedulesDay()