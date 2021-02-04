import { HttpClient, HttpHeaders, HttpParams ,HttpEventType} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map ,tap} from "rxjs/operators";
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
    postData,
    {
      observe:'response'
    })
    .subscribe(responseData=>{console.log(responseData);},
    error=>{
       this.errorOccurred.next(error.error.error);
   });
 }
 GetPosts()
 {
   return this.http.get<{ [key:string]: Post }>('https://httprequestsproject-b062b-default-rtdb.firebaseio.com/posts.json',
   {
     headers:new HttpHeaders({'content':'hello'}),
     params:new HttpParams().set('print','pretty')
   })
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
     return this.http.delete('https://httprequestsproject-b062b-default-rtdb.firebaseio.com/posts.json',
     {
       observe:'events'
     }).pipe(
       tap(event=>{
         console.log(event);
         if(event.type===HttpEventType.Response)
         {
           console.log(event.body);
         }
       })
     );

  }
}