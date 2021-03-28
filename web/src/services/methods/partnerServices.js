import api from './api';
import Local from '../model/Local';

export default class destinationServices{
    async consultarLocal(params){
        await api.get(`local/${params.idLocal}`).then((response)=>{

        }).catch((error)=>{
            console.log(error);
        });

        return;
    }

    async cadastrarLocal(params){
        //Objeto Local
        const obj = new Local(params.idCliente,params.usuario,params.senha,params.id,params.nome,params.quantidade,params.preco,params.latitude,params.longitude);
        
        await api.post(`local`,obj).then((response)=>{

        }).catch((error)=>{
            console.log(error);
        });

        return;
    }

    async atualizarLocal(params){
        //Objeto Local
        const obj = new Local(params.idCliente,params.usuario,params.senha,params.id,params.nome,params.quantidade,params.preco,params.latitude,params.longitude);
        
        await api.patch(`local/${params.idLocal}`,obj).then((response)=>{

        }).catch((error)=>{
            console.log(error);
        });

        return;
    }

    async excluirLocal(params){
        await api.delete(`local/${params.idLocal}`).then((response)=>{

        }).catch((error)=>{
            console.log(error);
        });

        return;
    }

}