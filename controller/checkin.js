import { service } from '../service/index.js'
import { screen } from "../screen/index.js";
import { ChekoutComponent } from './checkout.js';
import { CadastroComponent } from './cadastro.js';
    
    screen.getSpinner()
    setTimeout(() => {
        screen.getCheckinHtml();
        let idCheckin = [];
        service.getActivities()
            .then(function (dados) {
                dados.forEach((element) => {
                    if (element.checkout_at == null) {
                        idCheckin.push(element.vehicle_id);
                    }
                });
                getVeiculo();
            });

        let arrayVeiculos = [];
        const getVeiculo = () => {
            service.getVeiculo()
                .then(function (dados) {
                    dados.forEach((element) => {
                        if (idCheckin.includes(element.id)) {
                            criarNovaLinha(element.model, element.label, element.id);
                        }
                        if (element.label !== null) {
                            arrayVeiculos.push(element);
                        }
                    });
                    criarOpçoes(arrayVeiculos);
                });
        }
        const tabela = document.getElementById("tbody");
        const criarNovaLinha = (modelo, placa, id) => {
            const linhaNovo = document.createElement("tr");
            const conteudo = `
              <td>${modelo}</td>
              <td>${placa}</td>
              <td>
                <a id="${id}" class="btn-link" >checkout</a>
              </td>
       `;
            linhaNovo.innerHTML = conteudo;

            return tabela.appendChild(linhaNovo);
        }
        const main = document.getElementById("root");
        main.addEventListener('click', (event) => {
            const button = event.path[0].innerHTML
            const id = event.path[0].id

            if (button === 'checkout') {
                ChekoutComponent(id)
            }
            if (button === 'Adicionar Novo') {
                CadastroComponent()
            }
            if (button === 'Checkin') {
                const select = document.getElementById("select");
                searchID(select.value);
            }
        })

        const criarOpçoes = (arrayObjeto) => {
            const novoArray = arrayObjeto.filter((objeto) => {
                return !idCheckin.includes(objeto.id) ? true : false
            });

            const select = document.getElementById("select");
            novoArray.forEach((element) => {
                const option = new Option(element.label, element.id);
                select.add(option);
            });
        }

        const searchID = (id) => {
            service.getVeiculo()
                .then((dados) => {
                    dados.forEach((element) => {
                        if (element.id == id) {
                            checkinApi(element);
                        }
                    });
                });
        }

        const checkinApi = (cliente) => {
            const label = { label: cliente.label };

            service.postCheckin(label).then((data) => {
                window.location.reload()

            })

        }
    }, 600)

