import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() text: string = "Texte dynamique ici";
  @Input() title: string = "Titre dynamique ici";
  @Input() image: string = "";
}