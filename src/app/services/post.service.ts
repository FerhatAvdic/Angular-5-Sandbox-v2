import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()
export class PostService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }
  savePost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
  updatePost(post: Post): Observable<Post>{
    return this.http.put<Post>(`${this.postsUrl}/${post.id}`, post, httpOptions);
  }
  getPost(postId: Number): Observable<Post> {
    return this.http.get<Post>(`${this.postsUrl}/${postId}`);
  }
  removePost(postId: Number):Observable<Post>{
    return this.http.delete<Post>(`${this.postsUrl}/${postId}`, httpOptions);
  }
}
