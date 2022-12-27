import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  returnUrl: any;
  user$ = new Subject<any>();
  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.afAuth.authState.subscribe((user: any) => {
      this.user$.next(user);
      console.log(user);
    });
  }

  getUser() {
    return this.user$;
  }

  logIn() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', this.returnUrl);
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log('return url', this.returnUrl);
  }

  logOut() {
    this.afAuth.signOut();
  }
}
