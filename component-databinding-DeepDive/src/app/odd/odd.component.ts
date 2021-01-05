import { Component, Input, OnInit , AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, AfterContentInit {
   @Input('oddNum') oddNumber:number;
    
   @ContentChild('paragraphContent') paragraphOddNumber:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit()
  {
    console.log(this.paragraphOddNumber.nativeElement.textContent);
  }
}
