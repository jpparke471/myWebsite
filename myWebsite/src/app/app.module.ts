import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectCollectionComponent } from './project-collection/project-collection.component';
import { TaxGeoLocationComponent } from './tax-geo-location/tax-geo-location.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavBarComponent,
    MainContentComponent,
    ProjectCollectionComponent,
    TaxGeoLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
