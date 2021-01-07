import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='blue';
@HostBinding('style.backgroundColor') backgroundColor:string;
@HostBinding('textContent') textContent:string;

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

   ngOnInit()
   {
    //  this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','gray');
    //  this.renderer.setProperty(this.elRef.nativeElement,'textContent','text changed by renderer!');
    this.textContent='Style me with better directive!';
     this.backgroundColor=this.defaultColor;
   }
   @HostListener('mouseenter') mouseEnter(eventData:Event)
   {
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','gray');
  
    this.textContent='Text changed on Mouse Hover';
    this.backgroundColor=this.highlightColor;
   }
   @HostListener('mouseleave') mouseLeave(eventData:Event)
   {
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','transparent');
    
    this.textContent='Style me with better directive!';
    this.backgroundColor=this.defaultColor;
   }
}
