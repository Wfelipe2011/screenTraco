import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

// Funçaõ que vai escutar o submit
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
  const name = event.target.querySelector("[data-nome]").value;
  const email = event.target.querySelector("[data-email]").value;
  const cpf = event.target.querySelector("[data-cpf]").value;
  console.log(name, email, cpf)
  clienteService.criarCliente(name, email, cpf)// enviar os dados para funcao
  .then(()=>{
      window.location.href = '../telas/cadastro_concluido.html'
  })// redirencionar a pessoa para outra pagina
});
