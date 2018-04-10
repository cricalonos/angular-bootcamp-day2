import { Component } from '@angular/core';
import { posts } from '../../mocks/posts.mocks';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {

  private posts: Post[];

  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
  }

  /**
  * Método encargado de eliminar una publicación del listado de posts.
  */
  removePost(id: number): void {
    this.posts = this.postService.deletePost(this.posts, id);
  }

}
