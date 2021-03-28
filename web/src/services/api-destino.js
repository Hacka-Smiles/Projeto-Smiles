import axios from "axios";

const apiDestino = axios.create({
  baseURL: "https://projeto-smiles.herokuapp.com/",
});

export default apiDestino;