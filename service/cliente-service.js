//============= Conexao com API ====================
const localhost = `http://localhost:3000/profile`;
const herokuAPI = `https://api-formulario.herokuapp.com/formulario`;
const url = herokuAPI;

//=========== GET ================
const listaClientes = () => {
  return fetch(url).then((resposta) => {
    return resposta.json();
  });
};

// ========= POST ================
const criarCliente = (name, email, cpf) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      cpf: cpf,
    }),
  }).then((resposta) => {
    return resposta.body;
  });
};

//========= DELETE ================
const removeCliente = (cpf) => {
  return fetch(`https://api-formulario.herokuapp.com/formulario/${cpf}`, {
    method: "DELETE",
  });
};


//=========== GET ID ==================
const detalhaCliente = (cpf) => {
  return fetch(`https://api-formulario.herokuapp.com/formulario/${cpf}`)
  .then((resposta) => {
    return resposta.json();
  })
}

//========== PATCH ===================
const atualizaCliente = (cpf, nome, email) => {
    return fetch(`https://api-formulario.herokuapp.com/formulario/${cpf}`, {
          method: 'PUT',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            name: nome,
            email: email,
            cpf: cpf
          })
    } ).then( resposta => {
      return resposta.json();
    })
  }


//================= EXPORT =================
export const clienteService = {
  listaClientes,
  criarCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
};
