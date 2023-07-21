import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  Fname: any = ''
  Email: any = ''
  Phone: any = ''
  obj = {
    name: "",
    email: '',
    phone: ""
  }


  constructor() {

  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }


}
