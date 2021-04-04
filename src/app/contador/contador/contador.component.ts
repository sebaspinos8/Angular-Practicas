import { Component } from '@angular/core';



@Component({
    selector: 'app-contador',
    template: `
            <h1>{{titulo}}</h1>
            <h2>La base es: <strong>{{base}}</strong></h2>
            
            <button (click)="acumular(base)">Acumulame esta +</button>
            <button (click)="acumular(-base)">Acumulame esta -</button>
            <h2>El contador es: {{contador}}</h2>
    `

    
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    contador: number = 10;
    base: number = 5;
  
    sumar(){
      this.contador+=1;
    }
  
    restar(){
      this.contador-=1;
    }
  
    acumular(valor:number){
      this.contador += valor;
    }
}