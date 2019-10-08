import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
