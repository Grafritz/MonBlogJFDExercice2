import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon Blog JFD | Exercice 1';

  contentreapeat = 'Enthusiastically grow clicks-and-mortar ROI via fully researched thinking. Dramatically synergize premier results.';

  postsList = [
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
}
