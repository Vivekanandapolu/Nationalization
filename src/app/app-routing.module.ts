import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { I18nComponent } from './shared/i18n/i18n.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'i18n',
    component: I18nComponent
  }
  , {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: "form",
    component: TemplateFormComponent
  }
  , {
    path: "**",
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
