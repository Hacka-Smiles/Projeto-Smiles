import Endereco from './Endereco'

export default class Destino{
    constructor(idDestino,rating,nome,acessibilidade=[],logradouro,numero,bairro,cidade,estado,pais,latitude,longitude){
        this.idDestino = idDestino;
        this.rating = rating;
        this.nome = nome;
        this.acessibilidade = acessibilidade;
        this.latitude = latitude;
        this.longitude = longitude;
        this.endereco = new Endereco(logradouro,numero,bairro,cidade,estado,pais,"");
    }
}