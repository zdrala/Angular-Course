import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,filter} from 'rxjs/operators'
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts : Post[]= [];
  isFetching=false;
  error=null;

  errorSub = new Subscription;
  constructor(private http: HttpClient,
    private postService: PostService) {}

  ngOnInit() {
    this.errorSub=this.postService.errorOccurred.subscribe(
      error=>{
        this.error=error;
      }
    );
    this.fetchData();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.AddPost(postData.title,postData.content);
    }

  onFetchPosts() {
    // Send Http request
    this.fetchData();
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(
      ()=>{
        this.loadedPosts=[];
      }
    );
  }
  private fetchData()
  {
    this.isFetching=true;
    this.error=null;
    this.postService.GetPosts().subscribe(
      responseData=>{
        this.isFetching=false;
        this.loadedPosts=responseData;
      }
      ,error=>{
        this.isFetching=false;
        this.error=error.error.error+" -> "+error.statusText;
        console.log(error);
     }
    );
  }
  ngOnDestroy()
  {
    this.errorSub.unsubscribe();
  }
}
