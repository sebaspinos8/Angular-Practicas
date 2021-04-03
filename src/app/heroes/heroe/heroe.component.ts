import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
    
}) 
export class HeroeComponent{
    nombre:string = 'IronMan';
    edad:number = 22;
    
    obtenerNombre():string{
        return `${this.nombre}  -  ${this.edad}`;
    }

    obtenerCapitalizacion():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 20;
    }
    

}
