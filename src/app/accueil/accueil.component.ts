import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  stepText="en quelques chiffres"

  littleCardsData = [
    { title: "Left Card", image: "../../assets/cartegauche.jpg"},
    { title: "Right Card", image: "../../assets/cartedroite.jpeg"}
  ]
  
  squareCardsData = [
    { text: "Je suis le texte du composant 'squarecard' numéro un", title: "titre numéro un" },
    { text: "Je suis le texte du composant 'squarecard' number one", title: "titre number one" },
    { text: "Je suis le texte du composant 'squarecard' numero uno", title: "titre numero uno" },
  ];

  colorCardsData = [
    { title: "Information 1", color: "orange" },
    { title: "Information 2", color: "green" },
    { title: "Information 3", color: "blue" }
  ];

  verticalCardsData = [
    { title: "Je suis le projet 1", desc: "Je suis la description du projet 1", image: "../../assets/image1.jpg" },
    { title: "Je suis le projet 2", desc: "Je suis la description du projet 2", image: "../../assets/image2.jpg" },
    { title: "Je suis le projet 3", desc: "Je suis la description du projet 3", image: "../../assets/image3.jpg" }
  ];
}
