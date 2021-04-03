import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['IronMan','Hulk','Goku','Sebas'];
  borrado:string ='';

  borrar(){
    let aux=this.heroes.splice(this.heroes.length-1) || '';
    this.borrado=aux[aux.length-1] || '';
  }


}
