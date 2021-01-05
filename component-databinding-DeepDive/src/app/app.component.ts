import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Test server',content:'Just a test'}];

  oddNumbers: number[]=[];
  evenNumbers: number[]=[];
 
  onServerAdded(serverData: {serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onStartGame(number:number)
  {
    if(number%2==0){
      this.evenNumbers.push(number);
    }else
    {
      this.oddNumbers.push(number);
    }
  }
}
