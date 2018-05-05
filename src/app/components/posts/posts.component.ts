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
  isEdit: Boolean = false;

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
    console.log(post);
    this.isEdit = true;
  }
  onUpdatedPost(post: Post){
    this.posts.forEach((p, index)=>{
      if(post.id === p.id){
        // this.posts.splice(index,1);
        // this.posts.unshift(post);
        p = post;
      }
    });
    this.isEdit = false;
    this.currentPost = {
      id: 0,
      title: '',
      body: ''
    }
  }
  removePost(post: Post){
    if(confirm('Are you sure?')){
      this.postService.removePost(post.id)
        .subscribe(() =>{
          this.posts.forEach((p,index)=>{
            if (post.id === p.id) {
              this.posts.splice(index,1);
            }
          });
        });
    }
  }
}
