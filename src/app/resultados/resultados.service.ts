import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  dadosUsuario!: string

  getTexto(): string{
    return this.dadosUsuario

  }

  setTexto(texto: string){
     this.dadosUsuario = texto

  }

}
