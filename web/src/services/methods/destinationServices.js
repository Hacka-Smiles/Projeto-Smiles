import api from "./api";
import Destino from "../model/Destino";

export const consultarDestino = async (params) => {
  await api
    .get(`destino/${params.idDestino}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const cadastrarDestino = async (params) => {
  //Objeto Destino
  const obj = new Destino(
    params.rating,
    params.nome,
    params.acessibilidade,
    params.logradouro,
    params.numero,
    params.bairro,
    params.cidade,
    params.estado,
    params.pais,
    params.latitude,
    params.longitude
  );

  await api
    .post(`destino`, obj)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const atualizarDestino = async (params) => {
  //Objeto Destino
  const obj = new Destino(
    params.rating,
    params.nome,
    params.acessibilidade,
    params.logradouro,
    params.numero,
    params.bairro,
    params.cidade,
    params.estado,
    params.pais,
    params.latitude,
    params.longitude
  );

  await api
    .patch(`destino/${params.idDestino}`, obj)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const excluirDestino = async (params) => {
  //ID do destino

  await api
    .delete(`destino/${params.idDestino}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};
