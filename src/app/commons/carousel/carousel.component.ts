import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [678, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1900/500`);
}
