import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    /* console.log('Form->',this.loginForm.value); */
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        //redireccionar a la home page
        this.router.navigate(['/home'])
      }
    } catch (error: any) {
      alert(error.message)
    }



  }

  /* async onLogin(user:string, pass:string){
    console.log('Form->',this.loginForm.value);
    try {
      await this.loginForm.value(user,pass);
    } catch (error:any) {
      alert(error.message);
    } 
  } */

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