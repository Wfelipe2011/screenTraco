const getCadastroHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
<form id="formulario">
        <h1>Novo Cliente</h1>
        <div>
          <label>Nome do Cliente</label><br />
          <input
            name="cliente"
            id="cliente"
            class="input"
            type="text"
            placeholder="Nome do Cliente"
            required
          />
          <br />
        </div>
        <br />
        <div>
          <label>Modelo</label><br />
          <input
            id="modelo"
            class="input"
            type="text"
            placeholder="Modelo"
            required
          />
          <br />
        </div>
        <br />
        <div>
          <label>Tipo</label><br />
          <select id="tipo" class="input" type="text" placeholder="Tipo">
            <option value="1">Carro</option>
            <option value="0">Moto</option>
          </select>
          <br />
        </div>
        <br />
        <div>
          <label>Placa</label><br />
          <input
            id="placa"
            class="input"
            type="text"
            placeholder="Placa"
            required
          />
          <br />
        </div>
        <br />
        <div>
          <label>Observações</label><br />
          <input
            id="observacoes"
            class="input"
            type="text"
            placeholder="Observações"
            required
          />
          <br />
        </div>
        <div class="btn">
          <button id="cancelar" class="btn-link" type="button">Cancelar</button>
          <button class="btn-link" type="submit">Cadastrar</button>
        </div>
      </form>
`
  main.innerHTML = dadosHtml

}

const getListaClienteHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
          <section>
            <h1>Lista de Clientes</h1>
            <table id="tbody" class="tabela">
              <tr>
                <th class="none">Cliente</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th class="none">Tipo</th>
                <th class="none">Observações</th>
                <th><a class="btn-link">Novo Cliente</a></th>
              </tr>
            </table>
          </section>
    `
  main.innerHTML = dadosHtml

}

const getCheckinHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
        <section>
            <h2>Lista de Clientes no Estacionamento</h2>
            <br />
            <table id="tbody" class="tabela">
            <tr>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Opção</th>
            </tr>
            </table>
    
            <div>
            <label>Placa</label>
            <select class="input" id="select"></select>
            <a type="button" id="adicionar-novo">Adicionar Novo</a>
            <br />
            <div class="btn">
                <button id="checkin" class="btn-link">Checkin</button>
            </div>
            </div>
        </section>
    `
  main.innerHTML = dadosHtml
}

const getChekoutHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
        <section class="container">
        <h2>Dados do cliente</h2>
        <table class="tabela">
        <tr>
            <th>Cliente</th>
            <th>Modelo</th>
            <th>Placa</th>
        </tr>
        <tr id="tbody"></tr>
        </table>
        <div>
        <label>Total de Horas</label>
        <input
            id="totalHora"
            class="input"
            type="text"
            placeholder="Total de Horas"
            disabled
        />
        </div>
        <br />
        <div>
        <label>Valor a pagar</label>
        <input
            id="valorPagar"
            class="input"
            type="text"
            placeholder="Valor a pagar"
            disabled
        />
        </div>
        <br />
        <div class="btn">
        <button class="btn-link" id="finalizar">Finalizar</button>
        </div>
        </section>
    `
  main.innerHTML = dadosHtml
}

const getAtualizaHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
    <form id="formulario">
    <h1>Atualizar Cliente</h1>
    <br/>
    <div>
      <label>Nome do Cliente</label><br />
      <input
        name="cliente"
        id="cliente"
        class="input"
        type="text"
        placeholder="Nome do Cliente"
        required
      />
      <br />
    </div>
    <br />
    <div>
      <label>Modelo</label><br />
      <input
        id="modelo"
        class="input"
        type="text"
        placeholder="Modelo"
        required
      />
      <br />
    </div>
    <br />
    <div>
      <label>Tipo</label><br />
      <select id="tipo" class="select" type="text" placeholder="Tipo">
        <option value="1">Carro</option>
        <option value="0">Moto</option>
      </select>
      <br />
    </div>
    <br />
    <div>
      <label>Placa</label><br />
      <input
        id="placa"
        class="input"
        type="text"
        placeholder="Placa"
        required
      />
      <br />
    </div>
    <br />
    <div>
      <label>Observações</label><br />
      <input
        id="observacoes"
        class="input"
        type="text"
        placeholder="Observações"
        required
      />
      <br />
    </div>
    <br />
    <div id="button" class="btn">
      <button class="btn-link" type="button">Cancelar</button>
      <button class="btn-link" type="submit">Atualizar</button>
    </div>
    </form>
`
  main.innerHTML = dadosHtml
}

const getFaturamentoHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
        <section>
        <h1>Lista de Faturamento</h1>
        <table class="tabela">
          <thead>
            <tr>
              <th>Qtd Veiculos</th>
              <th>Total</th>
              <th>Dia</th>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
        <div class="grafico">
          <div id="piechart_3d" style="width: 900px; height: 500px;"></div>
        </div>
        </section>
    `
  main.innerHTML = dadosHtml
}

const getIndex = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
    <h1>Bem vindo ao modulo 3 newDev() Traco!</h1>
    <img class="imagem-principal" src="../assets/img/img-reportagens-1.png" />
    `
  main.innerHTML = dadosHtml
}

const getSpinner = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <div id="spinner"></div>
    `
  main.innerHTML = dadosHtml

}

export const screen = {
  getCadastroHtml,
  getListaClienteHtml,
  getCheckinHtml,
  getChekoutHtml,
  getAtualizaHtml,
  getFaturamentoHtml,
  getIndex,
  getSpinner
}