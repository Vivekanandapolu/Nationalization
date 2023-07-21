import { Component } from '@angular/core';
import { I18nService } from '../shared/i18n.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public i18nService: I18nService) {

  }
}
