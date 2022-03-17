import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/resultados/resultados.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  texto:string = this.resultadosService.getTexto()

  constructor(private resultadosService: ResultadosService) { }

  ngOnInit(): void {
    this.texto = this.resultadosService.getTexto()
  }

}
