import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector:'[appBasicHighlight]'  
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef:ElementRef)
  {

  }
  ngOnInit()
  {
      this.elementRef.nativeElement.style.backgroundColor="red";
      this.elementRef.nativeElement.textContent="text changed by basic directive!";
  }
}