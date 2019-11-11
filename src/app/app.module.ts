import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsService } from './services/posts.service';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
/**
 * intégrer un menu de navigation en haut (avec le routing correspondant),
 * permettant de naviguer vers la liste des posts (/posts) et vers le formulaire (/new)
 * (le path vide sera redirigé vers le path /posts)
 * — le lien du menu correspondant à la route active comportera la classe active
 */
const appRoute: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    // Intégrer le service dans l'application de manière globale.
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
