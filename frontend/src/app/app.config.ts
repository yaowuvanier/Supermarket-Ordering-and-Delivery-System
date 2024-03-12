import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => 
      initializeApp({
        "projectId":"ordering-delivering-angular",
        "appId":"1:2875810927:web:3e131fc65b309a9729599a",
        "storageBucket":"ordering-delivering-angular.appspot.com",
        "apiKey":"AIzaSyBbOitFk9Hetfny2RQl7TaAsPjYXpVvmws",
        "authDomain":"ordering-delivering-angular.firebaseapp.com",
        "messagingSenderId":"2875810927"
      })
    )), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
