import { Router } from '@angular/router';
import { AuthService } from './../../auth/services/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent {

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) { }


  async onLogOut() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error: any) {
      alert(error.message)
    }

  }

}
