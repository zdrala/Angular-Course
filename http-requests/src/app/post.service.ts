import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{
  
  errorOccurred=new Subject<string>();

    constructor(private http:HttpClient){}
 AddPost(title:string,content:string)
 {
     const postData: Post={title:title,content:content};
    
    this.http.post<{name:string}>
    ('https://httprequestsproject-b062b-default-rtdb.firebaseio.com/posts.json',
    postData)
    .subscribe(responseData=>{console.log(responseData);},
    error=>{
       this.errorOccurred.next(error.error.error);
   });
 }
 GetPosts()
 {
   return this.http.get<{ [key:string]: Post }>('https://httprequestsproject-b062b-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData=>{
   const postsArray:Post[] =[];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key)){
         postsArray.push({...responseData[key],id:key});
        }
      }
      return postsArray;
    }));

 }
  deletePosts()
  {
     return this.http.delete('https://httprequestsproject-b062b-default-rtdb.firebaseio.com/posts.json');

  }
}