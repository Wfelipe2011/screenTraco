import { service } from "../service/index.js";
import { screen } from "../screen/index.js";
import { ListaClienteComponent } from "./lista-cliente.js";

export const AtualizaComponent = (idComponent) => {

  screen.getSpinner()
  setTimeout(() => {
    screen.getAtualizaHtml();
    const idUrl = idComponent

    service.getVeiculo().then(function (dados) {
      dados.forEach((element) => {
        if (element.id == idUrl) {
          adicionarParametrosNoInput(element)
        }
      });
    });


    const adicionarParametrosNoInput = (objeto) => {
      document.getElementById("cliente").value = objeto.owner,
        document.getElementById("modelo").value = objeto.model,
        document.getElementById("tipo").value = objeto.type,
        document.getElementById("placa").value = objeto.label,
        document.getElementById("observacoes").value = objeto.observation
    }

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();

      const cadastroCliente = {
        owner: document.getElementById("cliente").value,
        model: document.getElementById("modelo").value,
        type: Number(document.getElementById("tipo").value),
        label: document.getElementById("placa").value,
        observation: document.getElementById("observacoes").value,
      };

      service.putVeiculo(cadastroCliente, idUrl)
      cancelar();
      ListaClienteComponent();
    });

    const button = document.getElementById("button");
    button.addEventListener('click', (event) => {
      const button = event.path[0].innerHTML
      button == 'Cancelar' ? cancelar() : ''
    })
  }, 600)
}

const cancelar = () => {
  formulario.reset()
}