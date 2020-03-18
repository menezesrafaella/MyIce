import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produtos';
import { Carrinho } from 'src/app/models/Carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  total: number = 0;

  constructor() { 
    this.carrinho.push(
      new Carrinho(new Produto(2, "assets/gelodecoco.png", "Gelo de Coco", "", 16.65, 15, 3), 1),
      new Carrinho(new Produto(4, "assets/produto4.jpg", "Tech Gel", "", 27, 24, 2), 1),
    )
    
    this.carrinho.forEach(item =>{
      this.subTotal += item.produto.precoDesconto * item.qtd;
    })
  }

  ngOnInit(): void {
  }

  aumentar(carrinho){
    carrinho.qtd++;
    this.subTotal += carrinho.produto.precoDesconto
  }

  diminuir(carrinho){
    if(carrinho.qtd > 1){
      carrinho.qtd--;      
      this.subTotal -= carrinho.produto.precoDesconto
    }

  
  }
  excluirProduto(item){
    console.log(item)
    this.subTotal -= (item.produto.precoDesconto * item.qtd)
    this.carrinho = this.carrinho.filter(itemP => itemP != item)

    }

  // buscarProduto(){
  //   let produtos = JSON.parse(localStorage.getItem("produto"))
  //   return produtos == null ? [] : produtos.produto
  // }

}
