import axios from "axios";

const apiCliente = axios.create({
  baseURL: "https://projeto-smiles.herokuapp.com/",
});

export default apiCliente;