import api from './api';

export default class clientServices{
    constructor(userName, usuario, senha, flowid){
        this.userName = userName;
        this.usuario = usuario;
        this.senha = senha;
        this.flowid = flowid;
    }
    
    async getClientAPI(params) {
        console.log("Estabelecendo conexão com o servidor...");
        const clientObj = { 
            usuario,
            email,
            
        };

        clientObj.usuario = params.usuario;
        clientObj.email = params.email;
    
        await api
        .get(`login/${params.userName}?usuario=${params.usuario}&senha=${params.senha}&flowid=${params.flowid}`)
        .then((response) => {
            auxResponse = response.status;
        })
        .catch((error) => {
            console.log(error);
        });

        return clientObj;
    }
  
    async postCreateClientAPI(params){
        console.log("Estabelecendo conexão com o servidor...");
        var auxResponse = 0;
    
        await api
        .post(`cadastrar/`,params)
        .then((response) => {
            auxResponse = response.status;
        })
        .catch((error) => {
            console.log(error);
        });
        
        return auxResponse;
    }
}