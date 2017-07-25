import { SlideDown } from '../animations/slide-down.animation';
import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'friendo-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [ SlideDown(255, false) ],
  // encapsulation: ViewEncapsulation.None
})
export class DrawerComponent {

  collapsed = false;

  @HostBinding('@SlideDown') get slideState() {
    return this.collapsed ? 'collapsed' : 'expanded';
  };

  @HostBinding('class.drawer-open') get openClass() {
    return !this.collapsed;
  }

  @HostBinding('class.drawer-closed') get closeClass() {
    return this.collapsed;
  }

  constructor() { }


  public toggle() {
    this.collapsed = !this.collapsed;
  }

  public close() {
    this.collapsed = true;
  }

  public open() {
    this.collapsed = false;
  }

 


}
