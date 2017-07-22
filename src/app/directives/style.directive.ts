import { Directive, ElementRef, NgModule, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fpadding]'
})
export class PaddingDirective implements OnInit{

  @Input() fpadding = 0;

  constructor(private el: ElementRef) { }


  ngOnInit() {
    this.el.nativeElement.style.padding = this.fpadding;
  }

}




@NgModule({
  declarations: [PaddingDirective],
  exports: [PaddingDirective]
})
export class StyleDirectivesModule {}