import Item from './Item';

export default class Carrinho{
    constructor(idCarrinho,idItem, preco, quantidade, nome){
        this.idCarrinho = idCarrinho;
        this.item = [new Item(idItem, preco, quantidade, nome)];
    }
}