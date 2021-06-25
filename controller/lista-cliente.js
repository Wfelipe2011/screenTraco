import { service } from "../service/index.js";
import { screen } from "../screen/index.js";
import { AtualizaComponent } from "./atualiza.js";
import { CadastroComponent } from "./cadastro.js";

export const ListaClienteComponent = () => {
  
  screen.getSpinner()
    setTimeout(() => {
      screen.getListaClienteHtml();
      service.getVeiculo().then((dados) => {
        dados.forEach((element) => {
          if (element.owner !== null) {
            criarNovaLinha(
              element.owner,
              element.model,
              element.label,
              element.type,
              element.observation,
              element.id
            );
          }
        });
      });
    
      const tabela = document.getElementById("tbody");
      const criarNovaLinha = (cliente, modelo, placa, tipo, observacoes, id) => {
    
        const linhaNovo = document.createElement("tr");
        const conteudo = `
            <td class="none">${cliente}</td>
            <td>${modelo}</td>
            <td>${placa}</td>
            <td class="none">${tipo}</td>
            <td class="none">${observacoes}</td>
            <td>
                <div class="lista-btn">
                  <a id="${id}" class="btn-link editar" >Editar</a>
                  <a id="${id}" class="btn-link" type="button">Excluir</a>
                </div>
            </td>
     `;
        linhaNovo.innerHTML = conteudo;
    
        return tabela.appendChild(linhaNovo);
      }
    
      //----------------- Delete --------------------
    
      tabela.addEventListener('click', (event) => {
        const button = event.path[0].innerHTML
        const id = event.path[0].id
        if (button === 'Excluir') {
          deletar(id)
        }
        if (button === 'Editar') {
          AtualizaComponent(id)
        }
        if (button === 'Novo') {
          CadastroComponent()
        }
      })
    }, 600)

  

}

const deletar = (id) => {
  service.deletarVeiculo(id).then(() => {
    ListaClienteComponent()
  })
}