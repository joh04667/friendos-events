import { AfterViewInit, Directive, ElementRef, Input, NgModule, OnInit } from '@angular/core';


// this is a terrible idea. Why am i doing this. im just gonna make a sass mixin instead
// oh that's right i had an idea but not gonna do it any more, go away
@Directive({
  selector: '[fpadding]'
})
export class PaddingDirective implements AfterViewInit {

  // TODO: support more than just pixel numbers. percents would be cool too
  private _fpadding: string;


  @Input()

  set fpadding(val) {
    this._fpadding = parseInt(val) + 'px';
  }

  constructor(private el: ElementRef) { }


  ngAfterViewInit() {
    this.el.nativeElement.style.padding = this._fpadding;
  }

}


@NgModule({
  declarations: [PaddingDirective],
  exports: [PaddingDirective]
})
export class StyleDirectivesModule { }