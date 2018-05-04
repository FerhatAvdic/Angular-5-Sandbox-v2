import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  onNewPost(post: Post){
    this.posts.unshift(post);
  }
  editPost(post: Post){
    this.currentPost = post;
  }
}