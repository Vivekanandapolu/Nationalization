import { Component, OnInit } from '@angular/core';
import { I18nService } from '../shared/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  direc: any = "ltr"
  constructor(public i18nService: I18nService) {

  }
  ngOnInit(): void {
    this.i18nService.curr_lang.subscribe((res: any) => {
      console.log(res)
      if (res == 'AR') {
        this.direc = "rtl"
      }
      else {
        this.direc = "ltr"

      }
    })
    console.log(this.i18nService.curr_lang);
  }
}
