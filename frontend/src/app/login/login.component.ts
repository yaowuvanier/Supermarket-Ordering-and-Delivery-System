import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from 'firebase/auth';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularFireAuth, GoogleAuthProvider],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private afAuth : AngularFireAuth){

  }

  async login() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      console.log(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }
}
