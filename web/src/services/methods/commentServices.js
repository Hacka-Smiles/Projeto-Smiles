import api from './api';
import Comentario from '../model/Comentario'

export default class commentServices{
    async criarComentario(params){
        //ID do Comentario
        
        await api.post(`comentario`,obj).then((response)=>{

        }).catch((error)=>{
            console.log(error);
        });

        return;
    }

    async consultarComentario(params){
        //ID do Comentario
        
        await api.get(`comentario/${params.idComentario}`).then((response)=>{

        }).catch((error)=>{
            console.log(error);
        });

        return;
    }

    async atualizarItem(params){
        //Objeto Comentario
        const obj = new Comentario(params.idComentario, params.comentario, params.idCliente);
        
        await api.patch(`comentario/${params.idComentario}`,obj).then((response)=>{

        }).catch((error)=>{
            console.log(error);
        });

        return;
    }

    async excluirItem(params){
        //ID do Comentario
        
        await api.delete(`comentario/${params.idComentario}`,params).then((response)=>{

        }).catch((error)=>{
            console.log(error);
        });

        return;
    }

}