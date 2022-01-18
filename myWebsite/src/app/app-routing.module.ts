import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ProjectCollectionComponent } from './project-collection/project-collection.component';
import { TaxGeoLocationComponent } from './tax-geo-location/tax-geo-location.component';

const routes: Routes = [
  {path: '', component: ProjectCollectionComponent},
  {path: 'about', component: AboutComponent},
  {path: 'geoDemo', component: TaxGeoLocationComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
