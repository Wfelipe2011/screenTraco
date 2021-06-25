import { service } from "../service/index.js";
import { screen } from "../screen/index.js";

export const ChekoutComponent = (idParams) => {
    
    let id = idParams

    console.log("ID: ", id)
    screen.getSpinner()
    setTimeout(() => {
        screen.getChekoutHtml();

            service.getVeiculo()
            .then((dados) => {
                dados.forEach((element) => {
                    if (element.id == id) {
                        adicionarParametrosNaTela(element);
                        buscarRegistro(id);
                    }
                });

            });
    
        let placa = "";
        const adicionarParametrosNaTela = (objeto) => {
            placa = objeto.label;
            const linhaNovo = document.getElementById("tbody");
            const conteudo = `
            <td>${objeto.owner}</td>
            <td>${objeto.model}</td>
            <td>${objeto.label}</td>
     `;
            linhaNovo.innerHTML = conteudo;
        }

        const buscarRegistro = (id) => {
            service.getActivities()
                .then((dados) => {
                    dados.forEach((element) => {
                        // fetch(`http://localhost:8000/api/activities/${element.id}`, {
                        //     method: "DELETE",
                        // })
                        if (element.vehicle_id == id) {
                            adicionarParametrosNoInput(element);
                        }
                    });
                });
        }

        const valorHora = 2;
        const valorMinuto = valorHora / 60;

        const adicionarParametrosNoInput = (objeto) => {
            const checkin = new Date(objeto.checkin_at);
            const checkout = new Date();
            const tempo = checkout - checkin;
            const hora = calculaHora(tempo);
            const totalApagar = (hora.minutos + (hora.horas * 60)) * valorMinuto;
            const inputHora = document.getElementById("totalHora");
            const inputTotal = document.getElementById("valorPagar")

            if (hora.minutos < 10 && hora.horas < 10)
                inputHora.value = `Tempo 0${hora.horas}:0${hora.minutos}`;

            if (hora.horas < 10)
                inputHora.value = `Tempo 0${hora.horas}:${hora.minutos}`;

            if (hora.minutos < 10)
                inputHora.value = `Tempo ${hora.horas}:0${hora.minutos}`;

            if (totalApagar < 10) {
                inputTotal.value = `R$: 0${totalApagar.toFixed(2)}`;
            } else {
                inputTotal.value = `R$: ${totalApagar.toFixed(2)}`;
            }

            const finalizar = document.getElementById("finalizar")
            finalizar.addEventListener('click', () => {

                const preco = document.getElementById("valorPagar").value;
                const stringArray = preco.split(" ");
                const objeto = {
                    label: placa,
                    price: Number(stringArray[1]),
                };

                checkoutApi(objeto);
            })
        }
    }, 600)
}

const calculaHora = (tempo) => {
    const objeto = {
        minutos: +((tempo / 60000) % 60).toFixed(0),
        horas: +(tempo / 3600000).toFixed(0),
    };
    return objeto;
}

const checkoutApi = (objeto) => {
    console.log(objeto)
        service.putCheckout(objeto).then(() => {
           window.location.href = "../screen/checkin.html"
    })
}