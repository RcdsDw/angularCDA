import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.css']
})
export class ServiceCardsComponent {
  @Input() title: string = "Titre dynamique ici";
  @Input() subtitle: string = "Sous-titre dynamique ici";
  @Input() desc1: string = "Description 1 dynamique ici";
  @Input() desc: string = "Description dynamique ici";
  @Input() image: string = "";
}
