import { Component } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent {
  textBan = "20 ans d’innovation au service de l’inclusion. STEP depuis deux décennies ne cesse de se réinventer en diversifiant ses activités et ses engagements"
  titreBan = "Découvrez nos missions"
  imageBan = "../../assets/reunion.jpg"

  horizontalCardsData = [
    { title: "Raison d'être", text: "«Personne n’est inemployable» tel est notre credo!", image: "../../assets/paysage1.jpg" },
    { title: "Nos Valeurs", text: "Une histoire qui dure depuis 20 ans", image: "../../assets/paysage2.jpg" },
    { title: "Partenaires", text: "Ils nous font confiance… et nous aussi", image: "../../assets/paysage3.jpg" },
  ];
}
