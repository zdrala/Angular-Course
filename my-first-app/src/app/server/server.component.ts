import { Component } from '@angular/core'
@Component({
selector:'app-server',
templateUrl:'./server.component.html',
// styles:[`
// .online{
//     color:white;
//     border: solid black 3px;
// }
// `]
styleUrls:['./server.component.css'],
})
export class ServerComponent{
ServerID: number=14;
ServerStatus='online';

constructor()
{
    this.ServerStatus=Math.random()>0.5? 'online': 'offline';
}

getServerID(){
    return this.ServerID;
}
getColor(){
    return this.ServerStatus==="online"? 'green': 'red';
}
}