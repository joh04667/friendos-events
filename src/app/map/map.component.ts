import { LatLngLiteral } from '@agm/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'friendo-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = 44.97180056595695;
  lng = -93.27114391326903;

  constructor() { }



  test(event: LatLngLiteral) {
    console.log(event);
  }
  ngOnInit() {
  }

}
