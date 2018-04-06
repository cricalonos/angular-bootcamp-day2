import { Component } from '@angular/core';
import { publicaciones } from '../../mocks/publicaciones.mocks';
import { Publicacion } from '../../interfaces/publicacion.interface';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html'
})
export class PublicacionComponent {

  private publicaciones: Publicacion[];

  constructor(private postService: PostService) {
    this.publicaciones = postService.getPosts();
  }

  /**
  * Método encargado de eliminar una publicación del listado de publicaciones.
  */
  eliminarPublicacion(id: number): void {
    this.publicaciones = this.postService.deletePost(this.publicaciones, id);
  }

}
