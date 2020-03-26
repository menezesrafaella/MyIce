import { Injectable } from '@angular/core';
import { Carrinho } from '../models/carrinho';
import { Cliente } from '../models/clienteapi';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  salvarCarrinho(carrinho){
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }

  recuperarCarrinho(){
    return JSON.parse(localStorage.getItem("carrinho")) 
  }

  removerCarrinho() {
    localStorage.removeItem("produtoCarrinho");
  }

  removerCarrinho2() {
    localStorage.removeItem("carrinho");
  }

  salvarCliente(cliente: Cliente) {
    localStorage.setItem('cliente', JSON.stringify(cliente));
  }
  
  recuperarCliente() {
    return JSON.parse(localStorage.getItem('cliente'));
  }

}
