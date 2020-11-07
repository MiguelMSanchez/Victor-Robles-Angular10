import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class frutaComponent{
    public nombre_componente:string = 'Componente de fruta';
    public listado_frutas:string = 'Naranja, Manzana, pera y Sandía';
    public nombre:string = "Miguel Morales";
    public edad:number = 36;
    public maytorDeEdad:boolean = true;
    public trabajos: Array<string> = ["recepcionista", " content", " full-stack"]


}