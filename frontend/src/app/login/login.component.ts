import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/app';
import { getAuth , GoogleAuthProvider} from 'firebase/auth';
import 'firebase/compat/firestore';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private afAuth : AngularFireAuth){

  }

  async login() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      console.log(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }
}
