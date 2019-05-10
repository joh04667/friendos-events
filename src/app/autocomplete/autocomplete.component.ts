import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { google } from "@agm/core/services/google-maps-types";

@Component({
  selector: 'friendo-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @ViewChild('search') searchRef;


  constructor(private maps: MapsAPILoader) { }

  async ngOnInit() {
    // await this.maps.load();

    
  }

}
