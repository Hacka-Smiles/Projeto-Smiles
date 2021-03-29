import Endereco from './Endereco'
import Telefone from './Telefone'
import Email from './Email'

export default class Cliente{
    constructor(clientId, nome, idade, genero, cpf, token, flowid,logradouro,numero,bairro,cidade,estado,pais,principalEndereco,cep,ddi,ddd,telefone,principalTelefone,email){
        this.clientId = clientId;
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.cpf = cpf;
        this.token = token;
        this.flowid = flowid;
        this.endereco = new Endereco(logradouro,numero,bairro,cidade,estado,pais,principalEndereco);
        this.telefone = new Telefone(cep,ddi,ddd,telefone,principalTelefone);
        this.email = new Email(email,email);
    }
}