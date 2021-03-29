import api from "../api";
import Login from "../model/Login";
import Sessao from "../model/Sessao";
import Cookies from 'js-cookie';

function setSession(chave, valor){
  Cookies.set(chave, valor)
}

  export const iniciarSessaoAPI = async (params) => {
    console.log("Estabelecendo conexão com o servidor...");
    //Objeto Login
    const obj = new Login(Cookies.get("idCliente"), params.usuario, params.senha);
    var aux = 0;
    var token = "";
    // console.log(obj);

    await api
      .post("login", JSON.stringify(obj))
      .then((response) => {
          console.log(response.data);
        //   console.log(JSON.parse(response.data));
        aux = response.status;
        console.log(aux);
        var auxObject = response.data;
        token = auxObject.token;
      })
      .catch((error) => {
        console.log(error);
      });

    if (aux === 200) {
      //Salvar na sessão
      console.log(token);
    }
    //200
    // 401 -> Token Expirado
    // 403 -> Token Inválido
    return aux;
  }

  export const verificarSessao = async (params) => {
    console.log("Estabelecendo conexão com o servidor...");
    //Objeto Sessao
    const obj = new Sessao(params.idCliente, params.token);
    var aux = 0;
    console.log("Objeto: " + obj);
    console.log("JSON: " + JSON.stringify(obj));

    await api
      .get(`login/sessao/${obj.idCliente}`,{ headers: { token: obj.token } })
      .then((response) => {
        aux = response.status;
      })
      .catch((error) => {
        console.log(error);
      });

    //200
    // 401 -> Token Expirado
    // 403 -> Token Inválido
    return aux;
  }

  export const cadastrarLogin = async (params) => {
    console.log("Estabelecendo conexão com o servidor...");
    //Objeto Login
    const obj = new Login(params.idCliente, params.usuario, params.senha);
    var aux = 0;

    await api
      .post("login/cadastrar", obj)
      .then((response) => {
        aux = response.status;
      })
      .catch((error) => {
        console.log(error);
      });

    //200
    // 400 -> Conta já existente
    return aux;
  }

  export const atualizarLogin = async (params) => {
    console.log("Estabelecendo conexão com o servidor...");
    //Objeto Login
    const obj = new Login(params.idCliente, params.usuario, params.senha);
    var aux = 0;

    await api
      .patch("login/atualizar", obj)
      .then((response) => {
        aux = response.status;
      })
      .catch((error) => {
        console.log(error);
      });

    //200
    // 400 -> Conta já existente
    return aux;
  }

