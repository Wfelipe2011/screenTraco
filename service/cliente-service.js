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
      cpf: cpf
    }),
  }).then((resposta) => {
    return resposta.body;
  });
};

//================= EXPORT =================
export const clienteService = {
  listaClientes,
  criarCliente
};
