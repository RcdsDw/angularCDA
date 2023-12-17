import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MetiersComponent } from './metiers/metiers.component';
import { MissionsComponent } from './missions/missions.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
  {
    path: "service-details", component: ServiceDetailsComponent
  },
  {
    path: "missions", component: MissionsComponent
  },
  {
    path: "metiers", component: MetiersComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "", component: AccueilComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
