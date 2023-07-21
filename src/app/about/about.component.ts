import { Component } from '@angular/core';
import { I18nService } from '../shared/i18n.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public i18nService: I18nService) {

  }
}
