import { AtualizaComponent } from "./controller/atualiza.js"
import { CadastroComponent } from "./controller/cadastro.js"
import { FaturamentoComponent } from "./controller/faturamento.js"
import { ListaClienteComponent } from "./controller/lista-cliente.js"
import { screen } from "./screen/index.js"

screen.getSpinner()
    setTimeout(() => {
        screen.getIndex();
    }, 600)
    
const link = document.querySelector('nav')
link.addEventListener('click', (event) => {
    const option = event.path[0].innerHTML
    switch (option) {
        case 'Checkin':
            window.location.href = "./screen/checkin.html"
            break;
        case 'Chekout':
            window.location.href = "./screen/checkout.html"
            break;
        case 'Cadastrar':
            CadastroComponent()
            break;
        case "Clientes":
            ListaClienteComponent()
            break;
        case 'Faturamento':
            FaturamentoComponent()
            break;
        case 'Faturamento':
            AtualizaComponent()
            break;
        default: screen.getIndex();
    }
})