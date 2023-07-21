import { Component, OnInit } from '@angular/core';
import { I18nService } from './shared/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nationalize';
  direc: any
  constructor(public i18nService: I18nService) {

  }
  ngOnInit(): void {
    this.i18nService.curr_lang.subscribe((res: any) => {
      console.log(res)
      if (res?.lang && res?.lang == "AR") {
        this.direc = "rtl"
        console.log(this.direc);
      } else {
        console.log("else")
        this.direc = "ltr"
      }

    })
  }
}
