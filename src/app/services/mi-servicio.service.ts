import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(
    private cliente:HttpClient
  ) { }

  private api:string =  'https://pokeapi.co/api/v2/type/3'


  obtenerPokemons(){
    /*this.cliente.get(this.api).subscribe(
      ( datos:any ) => {
        this.pokemons = datos.pokemon
        console.log(this.pokemons)
      }
    )*/
      /*
      try {
        let respuesta:any = await this.cliente.get(this.api).toPromise()
        this.pokemons = respuesta.pokemon
      }catch(e) {
        console.log(e)
      } finally{
        console.log('me ejecuto siempre')
      }*/

      return  this.cliente.get(this.api)

  }
}
