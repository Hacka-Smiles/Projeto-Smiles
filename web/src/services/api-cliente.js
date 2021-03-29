import axios from "axios";

const apiCliente = axios.create({
  baseURL: "https://projeto-smiles-cliente.herokuapp.com/",
});

export default apiCliente;