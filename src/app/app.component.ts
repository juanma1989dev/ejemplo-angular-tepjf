import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MiServicioService } from './services/mi-servicio.service'


interface Persona {
  Id:number
  Nombre:string
  Edad?:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = '3';

  validdo:boolean = false

  personas:Persona[] = []



  pokemons = []

  constructor(
    private miServicioService:MiServicioService
  ){ }

  async ngOnInit(){
    this.personas = this.obteneUsuarios()
    await this.obtenerPokemons()
  }

  cambiaValor(){
    console.log(this.validdo)
    this.validdo = !this.validdo
  }

  async obtenerPokemons(){
    this.miServicioService.obtenerPokemons().subscribe(
      ( datos:any ) => {
        this.pokemons = datos.pokemon
        console.log(this.pokemons)
      })
  }

  obteneUsuarios(){
    let  personas:Persona[] = [
      {
        'Id' : 1,
        'Nombre': 'Juan'
      },
      {
        'Id' : 1,
        'Nombre': 'Juan'
        ,
        'Edad' : 30
      }
    ]

    return personas
  }


}
