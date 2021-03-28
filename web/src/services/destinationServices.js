import api from './api';

export default class destinationServices {
    constructor(){

    }

    async getDestinationAPI(params){
        await api.get('').then((response) => {

        }).catch((error) => {
            console.log(error);
        });

        return;
    }

    async postDestinationAPI(params){
        await api.post('').then((response) => {

        }).catch((error) => {
            console.log(error);
        });

        return;
    }
}