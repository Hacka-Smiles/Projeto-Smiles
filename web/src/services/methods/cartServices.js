import api from "./api";
import Carrinho from "../model/Carrinho";

export const criarCarrinho = async (params) => {
  //Objeto do Carrinho
  const obj = new Carrinho(
    params.idCarrinho,
    params.idItem,
    params.preco,
    params.quantidade,
    params.nome
  );
  var aux = 0;

  await api
    .post("carrinho/", obj)
    .then((response) => {
      aux = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  // 200
  // 400
  return aux;
};

export const consultarCarrinho = async (params) => {
  // id
  var aux = 0;
  var obj = new Object();

  await api
    .get(`carrinho/${params}`)
    .then((response) => {
      aux = response.status;
      obj = JSON.parse(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  if (aux === 200) {
    return obj;
  }

  return aux;
};

export const atualizarCarrinho = async (params) => {
  //Objeto do Carrinho
  const obj = new Carrinho(
    params.idCarrinho,
    params.idItem,
    params.preco,
    params.quantidade,
    params.nome
  );

  await api
    .patch("carrinho/atualizar", obj)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const incluirItem = async (params) => {
  //Objeto Item
  const obj = new Item(
    params.idItem,
    params.preco,
    params.quantidade,
    params.nome
  );

  await api
    .post(`carrinho/${params.idItem}/incluirItem`, obj)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const atualizarItem = async (params) => {
  //Objeto Carrinho
  const obj = new Carrinho(
    params.idCarrinho,
    params.idItem,
    params.preco,
    params.quantidade,
    params.nome
  );

  await api
    .patch(`carrinho/${params.idCarrinho}/atualizarItem`, obj)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const excluirItem = async (params) => {
  await api
    .delete(`carrinho/${params.idCarrinho}/excluirItem/${params.idItem}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};

export const excluirCarrinho = async (params) => {
  await api
    .delete(`carrinho/${params.idCarrinho}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return;
};
