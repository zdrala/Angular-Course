import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus='No server was created';
serverName='TestServer';
username='';
serverCreated=false;

servers=['Test Server'];
  constructor() {

    setTimeout(
    ()=>{
        this.allowNewServer=true;
      },2000
    );
   }

  ngOnInit(): void {
  }
   onCreateServer()
   {
     this.servers.push(this.serverName);
     this.serverCreationStatus='Server was created! Name is ' +this.serverName;
    this.serverCreated=true;
    }
   onUpdateServerName(event: Event)
   {
     this.serverName=(<HTMLInputElement>event.target).value;
   }
   isDisabled()
   {
     if(this.username.length==0)
     return true;

     return false;
   }
   onReset()
   {
     this.username='';
   }
}
