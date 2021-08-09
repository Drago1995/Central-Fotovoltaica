import { AuthService } from './../services/auth.service';
/* import { auth } from 'firebase/app'; */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(/* public authSvc: AuthService */) { }

  ngOnInit(): void {
  }

  onRegister() {
    console.log('Form->', this.registerForm.value);

    /* const { email, password } = this.registerForm.value;
    this.authSvc.register(email, password); */

  }

}
