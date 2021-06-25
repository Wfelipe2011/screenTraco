import { service } from '../service/index.js'
import { screen } from "../screen/index.js";

export const CadastroComponent = () => {

    screen.getSpinner()
    setTimeout(() => {
        screen.getCadastroHtml();
        const label = [];
    service.getVeiculo().then((dados) => {
        dados.forEach((element) => {
            if (element.label != null) {
                label.push(element.label);
            }
        });
    });

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // para evitar do reload automatico do submit

        const cadastroCliente = {
            owner: document.getElementById("cliente").value,
            model: document.getElementById("modelo").value,
            type: Number(document.getElementById("tipo").value),
            label: document.getElementById("placa").value,
            observation: document.getElementById("observacoes").value,
        };

        if (label.includes(cadastroCliente.label)) {
            return alert("já existe essa placa: " + cadastroCliente.label);
        } else {
            service.postVeiculo(cadastroCliente)
            formulario.reset();
            CheckinComponent();
        }
    });

    const cancelar = document.getElementById("cancelar");
    cancelar.addEventListener('click', (event) => {
        event.preventDefault();
        formulario.reset();
    })

    }, 600)


    

}