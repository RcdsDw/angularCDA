import { Component } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  twitterIcon = faTwitter;
  facebookIcon = faFacebook;
  instagramIcon = faInstagram;
  linkedinIcon = faLinkedin;
}
