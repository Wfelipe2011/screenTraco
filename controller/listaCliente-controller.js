import { clienteService } from "../service/cliente-service.js";


// ============== TEMPLED ====================
function criarNovaLinha(name, cpf) {
  const linhaNovo = document.createElement("tr");
  const conteudo = `
     <td class="td" data-td>${name}</td>
     <td>${cpf}</td>
     <td>
         <ul class="tabela__botoes-controle">
             <li><a href="../telas/edita_cliente.html?id=" class="botao-simples botao-simples--editar">Editar</a></li>
             <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
         </ul>
     </td> 
     `;
  linhaNovo.innerHTML = conteudo;
  return linhaNovo;
}
  // pegar local html para adicionar a linha criada
  const tabela = document.querySelector("[data-tabela]");
  
  //-----------------------------------------------------------

  clienteService.listaClientes().then((data) => {
    data.forEach((element) => {
      if (element.name !== undefined) {
        tabela.appendChild(criarNovaLinha(element.name, element.email));
      }
    });
  });
  
  