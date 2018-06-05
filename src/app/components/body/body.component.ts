import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder conlleva una gran responsabilidad',
        autor: 'Tio Ben'
    };

    personajes: string[] = ['Spiderman', 'Iron Man', 'Thor', 'Capitan America', 'Hulk'];
}