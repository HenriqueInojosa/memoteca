import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos =[
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Minha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @InputMinha propriedade é decorada com o @Input',
      autoria: 'componente filho',
      modelo: 'modelo2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
