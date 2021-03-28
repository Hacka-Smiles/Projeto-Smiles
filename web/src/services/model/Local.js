import Servicos from "./Servicos";

export default class Login{
    constructor(idLocal, usuario, senha, id, nome, quantidade, preco, latitude, longitude){
        this.idLocal = idLocal;
        this.usuario = usuario;
        this.senha = senha;
        this.latitude = latitude;
        this.longitude = longitude;
        this.servicos = [new Servicos(id,nome,quantidade,preco)];
    }
}