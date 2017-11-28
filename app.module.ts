import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MissionControlComponent } from './missioncontrol.component';
import { ChirdComponent } from './chird.component';


let directives: any[] = [
  AppComponent,
  MissionControlComponent,
  ChirdComponent
];

let schemas: any[] = [];

// Include Countdown examples
// unless in e2e tests which they break.
if (!/e2e/.test(location.search)) {
  console.log('adding countdown timer examples');
} else {
  // In e2e test use CUSTOM_ELEMENTS_SCHEMA to suppress unknown element errors
  schemas.push(CUSTOM_ELEMENTS_SCHEMA);
}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: directives,
  bootstrap: [AppComponent
  ],
  schemas: schemas
})
export class AppModule { }
