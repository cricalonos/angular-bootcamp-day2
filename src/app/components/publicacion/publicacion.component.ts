import { Component } from '@angular/core';
import { publicaciones } from '../../mocks/publicaciones.mocks';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html'
})
export class PublicacionComponent {

  publicaciones = [];

  constructor() {
    this.publicaciones = publicaciones;
  }

  /**
  * Método encargado de eliminar una publicación del listado de publicaciones.
  */
  eliminarPublicacion(indice: number): void {
    this.publicaciones.splice(indice, 1);
  }

}
