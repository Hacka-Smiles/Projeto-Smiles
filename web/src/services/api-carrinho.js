import axios from "axios";

const apiCarrinho = axios.create({
  baseURL: "https://projeto-smiles.herokuapp.com/",
});

export default apiCarrinho;