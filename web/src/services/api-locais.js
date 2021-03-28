import axios from "axios";

const apiLocais = axios.create({
  baseURL: "https://projeto-smiles.herokuapp.com/",
});

export default apiLocais;