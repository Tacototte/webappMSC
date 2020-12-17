import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = "";
  pass = "";
 
  constructor(public auth: AngularFireAuth,private router: Router) { }

  user = this.auth.authState.pipe( map( authState => {
    
    
    if(authState) {
      return authState;
    }else{
      return null;
    }
  } ))

  loging(){
      console.log('login');
      this.auth.signInWithEmailAndPassword(this.email, this.pass)
      .then(user => {
        console.log('user logado como: ', user);
      })
      .catch( error => {
        console.log('error en email login', error);
      });
    
      this.router.navigate(['/']);
      
  }
  logout(){
    console.log('logout');
    this.auth.signOut();
    this.email = "";
    this.pass = "";
}
}
