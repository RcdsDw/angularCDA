import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-little-card',
  templateUrl: './little-card.component.html',
  styleUrls: ['./little-card.component.css']
})
export class LittleCardComponent {
  @Input() title: string = "Titre dynamique ici";
  @Input() image: string = "";
}
