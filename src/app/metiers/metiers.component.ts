import { Component } from '@angular/core';

@Component({
  selector: 'app-metiers',
  templateUrl: './metiers.component.html',
  styleUrls: ['./metiers.component.css']
})
export class MetiersComponent {
  textBan = "Des solutions et des métiers adaptés àvos besoins STEP vous accompagne en vous proposant dessolutions globales et ses expertises dans plusieurs grands secteurs d’activités. Les flux documentaires et le back office, les services de territoire et l’ingénierie informatique."
  titreBan = "Des solutions et des métiers adaptés à vos besoins"
  imageBan = "../../assets/bureau.jpg"

  verticalCardsData = [
    { title: "Boulanger", desc: "Nous faisons du bon pain", image: "../../assets/boulanger.jpg" },
    { title: "Policier", desc: "Nous arretons les voleurs", image: "../../assets/policier.jpg" },
    { title: "Avocat", desc: "Nous pladoyons de bons procès", image: "../../assets/avocat.jpg" },
    { title: "Vendeuse", desc: "Nous vendons bien", image: "../../assets/vendeuse.jpg" },
    { title: "Facteur", desc: "Nous livrons bien le courrier", image: "../../assets/facteur.jpg" },
    { title: "Menuisier", desc: "Nous menuisons bien les meubles", image: "../../assets/menuisier.jpg" },
    { title: "Développeur", desc: "Nous codons bien les sites", image: "../../assets/developpeur.jpg" },
  ];
}
