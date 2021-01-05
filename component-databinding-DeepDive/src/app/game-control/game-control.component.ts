import { Component, OnInit , EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output('inFired') intervalFired = new EventEmitter<number>();
 interval;
 incNumber=1;
 @ViewChild('buttonStart') startButton: ElementRef;
 @ViewChild('buttonStop',{static:true}) stopButton: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.stopButton.nativeElement.disabled=true;
  }

  startGame(){
    this.startButton.nativeElement.disabled=true;
    this.stopButton.nativeElement.disabled=false;
    this.interval=setInterval(()=>{
      this.intervalFired.emit(this.incNumber);
     this.incNumber++;
    },1000);
  }
  stopGame()
  {
    clearInterval(this.interval);
    this.startButton.nativeElement.disabled=false;
    this.stopButton.nativeElement.disabled=true;
  }
}
