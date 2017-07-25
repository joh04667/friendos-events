import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

import 'hammerjs';
import { MapComponent } from './map/map.component';
import { StyleDirectivesModule } from './directives/style.directive';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    StyleDirectivesModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey,
      libraries: ['places']
    })
  ],
  providers: [ MdIconRegistry ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

