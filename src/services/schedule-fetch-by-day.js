import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisicao.
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    
    //converte para o json
    const data = await response.json();

    //Filtra os agendamentos pelo dia selecionado

    const dailyScheludes = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailyScheludes;
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel buscar os agendamentos do dia selecionado.");
  }
}
