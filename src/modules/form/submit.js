import dayjs from "dayjs";
import {schedulesDay} from "../schedules/load.js"
import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectDate = document.getElementById("date");

//Data atual para para formata o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual para o input e define a data minima
selectDate.value = inputToday;
selectDate.min = inputToday;

form.onsubmit  = async (event) => {
  //previne o comportamento padrao de recarregar a pagina.
  event.preventDefault();
  console.log("enviado");

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    //Recuperando o Horario selecionado.
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    //Recuperando somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //Isere a hora na data
    const when = dayjs(selectDate.value).add(hour, "hour");

    //gera um id
    const id = new Date().getTime().toString();

    //faz os agendamentos
    await scheduleNew({
      id,
      name,
      when,
    });

    //Recarrega os agendamentos
    await schedulesDay()
    // Limpa o imput de nome de cliente
    clientName.value = ""

  } catch (error) {
    alert("Não foi possivel realizar o agendamento.");
    console.log(error);
  }
};
