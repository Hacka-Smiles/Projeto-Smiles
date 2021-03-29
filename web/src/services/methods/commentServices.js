import api from "./api";
import Comentario from "../model/Comentario";

export const criarComentario = async (params) => {
  //ID do Comentario

  await api
    .post(`comentario`, obj)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const consultarComentario = async (params) => {
  //ID do Comentario

  await api
    .get(`comentario/${params.idComentario}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const atualizarItem = async (params) => {
  //Objeto Comentario
  const obj = new Comentario(
    params.idComentario,
    params.comentario,
    params.idCliente
  );

  await api
    .patch(`comentario/${params.idComentario}`, obj)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const excluirItem = async (params) => {
  //ID do Comentario

  await api
    .delete(`comentario/${params.idComentario}`, params)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};
