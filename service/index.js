const heroku = "https://traco-3.herokuapp.com"
const localhost = "http://localhost:8000"
const url = heroku

// ----------------- GET ----------------------------

const getVeiculo = () => {
    return fetch(`${url}/api/vehicles`)
        .then((resposta) => {
            if (resposta.status != 200) {
                throw `Server error: ${resposta.status}`;
            } else {
                return resposta.json();
            }
        })
}

const getActivities = () => {
    return fetch(`${url}/api/activities`)
        .then(function (resposta) {
            if (resposta.status != 200) {
                throw `Server error: ${resposta.status}`;
            } else {
               return resposta.json();
            }
        })
}

// ---------------- POST ----------------------------

const postVeiculo = (objetoCliente) => {
    return fetch(`${url}/api/vehicles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objetoCliente),
    }).then((resposta) => {
        if (resposta.status != 200) {
            console.log(`Server error: ${resposta.status}`)
            return resposta.json()
        } else {
            alert("Sucesso ao salvar: " + resposta.status);
            return resposta.json()
        }
    });
}

const postCheckin = (label) => {
    return fetch(`${url}/api/activities/checkin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(label),
    }).then(function (resposta) {
        if (resposta.status != 200) {
            throw `Server error: ${resposta.status}`;
        } else {
            return resposta.json()
        }
    });
}

// ---------------- PUT -----------------------------

const putVeiculo = (cadastroCliente, idUrl) => {
    fetch(`${url}/api/vehicles/${idUrl}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastroCliente),
    }).then((resposta) => {
        if (resposta.status != 200) {
            console.log(`Server error: ${resposta.status}`);
        } else {
            alert("Sucesso em atualizar: ", resposta.status);
            return resposta.json()
        }
    });
}

const putCheckout = (objeto) => {
    return fetch(`${url}/api/activities/checkout`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objeto),
    }).then(function (resposta) {
        if (resposta.status != 200) {
            throw `Server error: ${resposta.status}`;
        } else {
            return resposta.json()
        }
    });
}

// ---------------- DELETE --------------------------

const deletarVeiculo = (id) => {
    return fetch(`${url}/api/vehicles/${id}`, {
        method: "DELETE",
    })
}




// --------------- Export Method---------------------------

export const service = {
    getVeiculo,
    postVeiculo,
    deletarVeiculo,
    putVeiculo,
    getActivities,
    postCheckin,
    putCheckout
}