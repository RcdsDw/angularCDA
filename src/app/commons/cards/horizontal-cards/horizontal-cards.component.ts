import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-cards',
  templateUrl: './horizontal-cards.component.html',
  styleUrls: ['./horizontal-cards.component.css']
})
export class HorizontalCardsComponent {
  @Input() title: string = "Titre dynamique ici";
  @Input() text: string = "Titre dynamique ici";
  @Input() image: string = "";
}
