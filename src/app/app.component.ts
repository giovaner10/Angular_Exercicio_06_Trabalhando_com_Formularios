import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { ResultadosService } from './resultados/resultados.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = ''
  lastName: string = ''
  username: string = ''
  endereco: string = ''
  CPF: string = ''
  Complemento: string = ''
  senha: string = ''
  senhaConfirm: string = ''
  telefone: string = ''



  constructor(public dialog: MatDialog, private resultadosService: ResultadosService) {}

  openDialog() {

    this.resultadosService.setTexto(`
    NOME: ${this.name} 
    Sobrenome: ${this.lastName} 
    Endereço: ${this.endereco}
    Username: ${this.username}
    `)

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result:`);
    });
  }



    
  
/////////////////////////////////////////////////
  verificarSenhas(val1: any, val2: any): boolean{
    return !(val1 === val2)
  }

///////////////////////////////////////////////

personalData: FormGroup = new FormGroup({
  name2: new FormControl('', [Validators.required, Validators.minLength(3)]),
  lastName2: new FormControl('', [Validators.required, Validators.minLength(3)]),
  username2: new FormControl('', [Validators.required, Validators.minLength(3)]),
  endereco2: new FormControl('', [Validators.required, Validators.minLength(3)]),
  complemento2: new FormControl('', [Validators.required, Validators.minLength(3)]),
  CPF2: new FormControl('', [Validators.required, Validators.minLength(11)]),
  senha2: new FormControl('', [Validators.required, Validators.minLength(6)]),
  senhaConfirm2: new FormControl('', [Validators.required, Validators.minLength(6)]),
  telefone2: new FormControl('', [Validators.required, Validators.minLength(10)]),

 
})

openDialog2() {

  this.resultadosService.setTexto(`
  Nome: ${this.personalData.controls['name2'].value}
  Sobrenome: ${this.personalData.controls['lastName2'].value} 
  Endereço: ${this.personalData.controls['endereco2'].value}
  Username: ${this.personalData.controls['username2'].value}
  `)

  const dialogRef = this.dialog.open(DialogComponent, {
    width: '350px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result:`);
  });
}



}





