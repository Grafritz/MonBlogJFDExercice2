import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon Blog JFD | Exercice 1';

  contentreapeat = 'Enthusiastically grow clicks-and-mortar ROI via fully researched thinking. Dramatically synergize premier results.';

  postsList1 = [
    {
      title: 'Jean Fritz D.',
      content: this.contentreapeat,
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Créez une application de type blog',
      content: this.contentreapeat,
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Préparez le projet',
      content: this.contentreapeat,
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Structurez avec les components',
      content: this.contentreapeat,
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Découvrez la structure du code',
      content: this.contentreapeat,
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDNDLGdMP8IUvyHNKOhJ0uuq0Kg0mQFi5c',
      authDomain: 'exoangularbibliotheque.firebaseapp.com',
      databaseURL: 'https://exoangularbibliotheque.firebaseio.com',
      projectId: 'exoangularbibliotheque',
      storageBucket: 'exoangularbibliotheque.appspot.com',
      messagingSenderId: '929960927415',
      appId: '1:929960927415:web:56576355378f897b7ead32',
      measurementId: 'G-Z29PQHD70Z'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }


}
