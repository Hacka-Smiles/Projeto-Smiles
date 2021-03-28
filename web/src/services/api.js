//API DE AUTENTICAÇÃO

import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-smiles.herokuapp.com/",
});

export default api;