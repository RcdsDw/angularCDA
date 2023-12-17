import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent {
  @Input() title: string = "Titre dynamique ici";
  @Input() desc: string = "Description dynamique ici";
  @Input() image: string = "Image dynamique ici";
}
