import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './commons/carousel/carousel.component';
import { CardComponent } from './commons/cards/big-card/card.component';
import { LittleCardComponent } from './commons/cards/little-card/little-card.component';
import { MissionsComponent } from './missions/missions.component';
import { MetiersComponent } from './metiers/metiers.component';
import { SquareCardComponent } from './commons/cards/square-card/square-card.component';
import { StepTitleComponent } from './commons/title/step-title/step-title.component';
import { SwitchCardComponent } from './commons/cards/switch-card/switch-card.component';
import { ColorCardsComponent } from './commons/cards/color-cards/color-cards.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LastCardComponent } from './commons/cards/last-card/last-card.component';
import { VerticalCardComponent } from './commons/cards/vertical-card/vertical-card.component';
import { ReliefCardComponent } from './commons/cards/relief-card/relief-card.component';
import { ServiceCardsComponent } from './commons/cards/service-cards/service-cards.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { MapCardComponent } from './commons/cards/map-card/map-card.component';
import { FormContactComponent } from './commons/form/form-contact/form-contact.component';
import { HorizontalCardsComponent } from './commons/cards/horizontal-cards/horizontal-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    MissionsComponent,
    MetiersComponent,
    LittleCardComponent,
    SquareCardComponent,
    StepTitleComponent,
    SwitchCardComponent,
    ColorCardsComponent,
    ContactComponent,
    LastCardComponent,
    VerticalCardComponent,
    ReliefCardComponent,
    ServiceCardsComponent,
    ServiceDetailsComponent,
    MapCardComponent,
    FormContactComponent,
    HorizontalCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faTwitter, faFacebook, faInstagram, faLinkedin);
  }
}
