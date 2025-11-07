import { scheduleCancel} from "../../services/schedule-cancel.js"
import {schedulesDay } from "./load.js"
const periods = document.querySelectorAll(".period");

// gerar envento de click para cada periodo
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li");

      // pega o id para remover 
      const { id } = item.dataset;

      //confirma que o id foi selecionado
      if (id) {
        // confirma de o usuario quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          //Faz a requisicao na API para cancelar
          await scheduleCancel({id})
          schedulesDay()
        }
      }
    }
  });
});
