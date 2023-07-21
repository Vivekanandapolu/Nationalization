import { Injectable, Inject } from '@angular/core';
import { i18nConfigService } from './i18n-config.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class I18nService {
  currentLanguage: any = '';
  readonly curr_lang = new BehaviorSubject<any>('')

  constructor(@Inject(i18nConfigService) public langList: any[]) {
    this.initLang();
  }
  initLang() {
    let lang_obj = {
      lang: 'EN'
    }
    if (localStorage.getItem('lang')) {
      this.currentLanguage = localStorage.getItem('lang');

      lang_obj.lang = this.currentLanguage
      this.curr_lang.next(lang_obj)

    } else {
      localStorage.setItem('lang', 'EN');
      this.currentLanguage = 'EN';
      this.curr_lang.next(lang_obj)
    }
  }

  getString(key: any) {

    let key_value = this.langList.find((each: any) => each.lang === this.currentLanguage)
    return key_value.file[key]
  }

  languageChange(lang: any) {
    let lang_obj = {
      lang: lang
    }
    this.currentLanguage = lang;
    this.curr_lang.next(lang_obj)
    localStorage.setItem('lang', lang);
  }
}
