import { Injectable } from '@angular/core';
import { posts } from '../mocks/posts.mocks';
import { Post } from '../interfaces/post.interface';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Post[] {
    return posts;
  }

  deletePost(posts: Post[], id: number) {
    posts = posts.filter(post => post.id != id);
    return posts;
  }

}
