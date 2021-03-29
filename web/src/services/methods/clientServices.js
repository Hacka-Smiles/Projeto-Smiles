import api from "../api";
import Cliente from "../model/Cliente";

export const consultarCliente = async (params) => {
    //ID do cliente
    await api
      .get(`cliente/${params.clientId}`)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });

    return;
  }

  export const cadastrarCliente = async (params) => {
    //Objeto Cliente
    const obj = new Cliente(
      params.clientId,
      params.nome,
      params.idade,
      params.genero,
      params.cpf,
      params.token,
      params.flowid,
      params.logradouro,
      params.numero,
      params.bairro,
      params.cidade,
      params.estado,
      params.pais,
      params.principalEndereco,
      params.cep,
      params.ddi,
      params.ddd,
      params.telefone,
      params.principalTelefone,
      params.PrincipalEmail
    );

    await api
      .post("cliente", obj)
      .then((response) => {

      })
      .catch((error) => {
        console.log(error);
      });

    return;
  }

  export const atualizarCliente = async (params) => {
    //Objeto Cliente
    const obj = new Cliente(
      params.clientId,
      params.nome,
      params.idade,
      params.genero,
      params.cpf,
      params.token,
      params.flowid,
      params.logradouro,
      params.numero,
      params.bairro,
      params.cidade,
      params.estado,
      params.pais,
      params.principalEndereco,
      params.cep,
      params.ddi,
      params.ddd,
      params.telefone,
      params.principalTelefone,
      params.PrincipalEmail
    );

    await api
      .patch(`cliente/${params.clientId}`, obj)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });

    return;
  }

  export const consultarClientId = async (params) => {
    //Objeto Login
    const obj = new Login(params.idCliente, params.usuario, params.senha);

    await api
      .get("cliente", obj)
      .then((response) => {
        
      })
      .catch((error) => {
        console.log(error);
      });

    return;
  }

  export const excluirCliente = async (params) => {
    //ID do cliente
    await api
      .delete(`cliente/${params.idCliente}`)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });

    return;
  }