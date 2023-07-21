import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { I18nService } from '../i18n.service';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css']
})
export class I18nComponent implements OnInit {
  constructor(public i18nService: I18nService, private sanitization: DomSanitizer) { }
  ngOnInit() {
  }

  sanitize(img: any) {
    return this.sanitization.bypassSecurityTrustStyle(`url('${img}');`);
  }

}
