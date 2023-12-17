import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-cards',
  templateUrl: './color-cards.component.html',
  styleUrls: ['./color-cards.component.css']
})
export class ColorCardsComponent {

  @Input() color: string =''
  @Input() title: string = "Titre dynamique ici";

  constructor() {}
  card = {number: 0, target: 10000}
  ngOnInit(): void {
      
      setInterval(() => {
        if (this.card.number < this.card.target) {
          this.card.number++;
        }
      }, 1);
    }
}
