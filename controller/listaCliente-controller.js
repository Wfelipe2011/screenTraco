import { clienteService } from "../service/cliente-service.js";

// ============== TEMPLED ====================
function criarNovaLinha(name, email, cpf) {
  const linhaNovo = document.createElement("tr");
  const conteudo = `
     <td class="td" data-td>${name}</td>
     <td class="email">${email}</td>
     <td>
         <ul class="tabela__botoes-controle">
             <li><a href="./edita_cliente.html?id=${cpf}" class="botao-simples botao-simples--editar">Editar</a></li>
             <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
         </ul>
     </td> 
     `;
  linhaNovo.innerHTML = conteudo;
  linhaNovo.dataset.id = cpf;
  return linhaNovo;
}
// pegar local html para adicionar a linha criada
const tabela = document.querySelector("[data-tabela]");

//-----------Excluir----------------------------
tabela.addEventListener("click", (event) => {
  let ehBotaoDeletar =
    event.target.className === "botao-simples botao-simples--excluir";
  if (ehBotaoDeletar) {
    const linhaCliente = event.target.closest("[data-id]");
    let cpf = linhaCliente.dataset.id;
    console.log(cpf);
    clienteService.removeCliente(cpf)
    .then(() => {
      linhaCliente.remove();
    });
  }
});

//-----------------------------------------------------------

clienteService.listaClientes().then((data) => {
  data.forEach((element) => {
    if (element.name !== undefined) {
      tabela.appendChild(
        criarNovaLinha(element.name, element.email, element.cpf)
      );
    }
  });
});
