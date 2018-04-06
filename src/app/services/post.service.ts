import { Injectable } from '@angular/core';
import { publicaciones } from '../mocks/publicaciones.mocks';
import { Publicacion } from '../interfaces/publicacion.interface';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Publicacion[] {
    return publicaciones;
  }

  deletePost(posts: Publicacion[], id: number) {
    posts = posts.filter(post => post.id != id);
    return posts;
  }

}
