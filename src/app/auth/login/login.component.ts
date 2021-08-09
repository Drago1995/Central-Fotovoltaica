import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log('Form->',this.loginForm.value);
    
  }

}


/* import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AuthService) { }

  loginForm=new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  ngOnInit(): void {
  }

  async login(user: string, password: string) {
    try {
      await this.login(user, password);
    } catch (error: any) {
      alert(error.message);
    }
  }
  
  onLogin(){
    console.log('Form->',this.loginForm.value);
    
  }

} */