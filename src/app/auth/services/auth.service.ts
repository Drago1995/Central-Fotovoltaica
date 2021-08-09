import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
/* import { auth } from 'firebase/app'
import { User } from 'firebase'; */



@Injectable()
export class AuthService {

  /* public user: User; */

  constructor(public afAuth: AngularFireAuth) { }


  async login(email: string, password: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    return result;
  
  }

  async register(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);

    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}


