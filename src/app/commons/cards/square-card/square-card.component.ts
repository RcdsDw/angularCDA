import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-card',
  templateUrl: './square-card.component.html',
  styleUrls: ['./square-card.component.css']
})
export class SquareCardComponent {
  @Input() title: string = "Titre dynamique ici";
  @Input() text: string = "Texte dynamique ici";
}
