import { clienteService } from "../service/cliente-service.js";

const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get("id");

console.log(id);

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');
const inputCpf = document.querySelector('[data-cpf]');

//--------- Get com cpf ------------
clienteService.detalhaCliente(id)
.then( dados => {
    inputNome.value = dados.name,
    inputEmail.value = dados.email,
    inputCpf.value = dados.cpf
})

//========= PUT CLiente ==========

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();

    clienteService.atualizaCliente(inputCpf.value, inputNome.value, inputEmail.value)
    .then(()=>{
        window.location.href = "../edicao_concluida.html"
    })
})