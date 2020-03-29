import { produtoAPI } from './produtoAPI';

export class Pedido {
    constructor(
        private idCliente: number,
        private vlFrete: number,
        private vlTotal: number,
        private idCartao: number,
        private idEndereco: number,
        private itemPedido: produtoAPI[],
        private idPedido?: number
    ) { }
}