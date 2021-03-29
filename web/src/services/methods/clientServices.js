import api from "../api";
import Cliente from "../model/Cliente";
import Cookies from 'js-cookie';

function setSession(chave, valor){
  Cookies.set(chave, valor)
}

export const consultarCliente = async (params) => {
  //ID do cliente
  await api
    .get(`cliente/${params.clientId}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const cadastrarCliente = async (params) => {
  //Objeto Cliente
  const obj = new Cliente(
    params.nome != null ? params.nome : "",
    params.idade != null ? params.idade : "",
    params.genero != null ? params.genero : "",
    params.cpf != null ? params.cpf : "",
    params.token != null ? params.token : "",
    params.flowid != null ? params.flowid : "",
    params.logradouro != null ? params.logradouro : "",
    params.numero != null ? params.numero : "",
    params.bairro != null ? params.bairro : "",
    params.cidade != null ? params.cidade : "",
    params.estado != null ? params.estado : "",
    params.pais != null ? params.pais : "",
    params.principalEndereco != null ? params.principalEndereco : "",
    params.cep != null ? params.cep : "",
    params.ddi != null ? params.ddi : "",
    params.ddd != null ? params.ddd : "",
    params.telefone != null ? params.telefone : "",
    params.principalTelefone != null ? params.principalTelefone : "",
    params.PrincipalEmail != null ? params.PrincipalEmail : ""
  );

  var aux = 0;

  await api
    .post("cliente", obj)
    .then((response) => {
      aux = response.status;
      setSession("idCliente",response.data.idCliente);
    })
    .catch((error) => {
      console.log(error);
    });



  return aux;
};

export const atualizarCliente = async (params) => {
  //Objeto Cliente
  const obj = new Cliente(
    params.nome != null ? params.nome : "",
    params.idade != null ? params.idade : "",
    params.genero != null ? params.genero : "",
    params.cpf != null ? params.cpf : "",
    params.token != null ? params.token : "",
    params.flowid != null ? params.flowid : "",
    params.logradouro != null ? params.logradouro : "",
    params.numero != null ? params.numero : "",
    params.bairro != null ? params.bairro : "",
    params.cidade != null ? params.cidade : "",
    params.estado != null ? params.estado : "",
    params.pais != null ? params.pais : "",
    params.principalEndereco != null ? params.principalEndereco : "",
    params.cep != null ? params.cep : "",
    params.ddi != null ? params.ddi : "",
    params.ddd != null ? params.ddd : "",
    params.telefone != null ? params.telefone : "",
    params.principalTelefone != null ? params.principalTelefone : "",
    params.PrincipalEmail != null ? params.PrincipalEmail : ""
  );

  await api
    .patch(`cliente/${params.clientId}`, obj)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const consultarClientId = async (params) => {
  //Objeto Login
  const obj = new Login(params.idCliente, params.usuario, params.senha);

  await api
    .get("cliente", obj)
    .then((response) => {
      setSession("idCliente",response.data.idCliente);
    })
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const excluirCliente = async (params) => {
  //ID do cliente
  await api
    .delete(`cliente/${params.idCliente}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};
