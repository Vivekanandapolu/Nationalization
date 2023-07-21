import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { I18nComponent } from './shared/i18n/i18n.component';
import { I18nModule } from './shared/i18n.module';
import { EnglishData } from './header/en.json';
import { FrenchData } from './header/fr.json';
import { I18nPipe } from './shared/i18n.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ArabicData } from './header/ar.json';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule } from '@angular/forms';


const languages = [
  { lang: 'EN', file: EnglishData },
  { lang: 'FR', file: FrenchData },
  { lang: 'AR', file: ArabicData }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    I18nComponent,
    I18nPipe,
    NavbarComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    I18nModule.forRoot(languages),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
