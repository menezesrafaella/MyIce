import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnChanges {

  quantidade: number;
  usuario: any


  @Input() atualizarQuantidade: boolean;  
  @Output() atualizarCarrinho: EventEmitter<any> = new EventEmitter();

  constructor( private storage : StorageService, public cliente : ClienteService, private router: Router) { 
    cliente.logado();
    if(sessionStorage.getItem("usuario") != null){
      this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    }
    
    setInterval(() => { 
      if (this.storage.recuperarCarrinho() != null)     
      this.quantidade = this.storage.recuperarCarrinho().length;
    }, 400);


    if(this.storage.recuperarCarrinho() != null){
      this.quantidade = this.storage.recuperarCarrinho().length;
    }else{
      this.quantidade = 0;
    }

    cliente.clienteLogado.subscribe(logado =>{
      this.usuario = logado
    })
   }

   logout(){
    sessionStorage.removeItem("usuario")
    localStorage.removeItem("carrinho")
  }

  ngOnChanges(): void {

    if(this.atualizarQuantidade){
      this.quantidade = this.storage.recuperarCarrinho().length;
      setTimeout(() => {
        this.atualizarCarrinho.emit();
        
      })
    }
    


  }

  buscarProduto( palavra: string ){

    if(palavra.length < 1){
      return;
    }

    this.router.navigate(['busca', palavra]);
  }


}
