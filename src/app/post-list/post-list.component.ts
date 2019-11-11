import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Posts } from '../models/Posts.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() listAllPost: [];

  postsList: Posts[];
  postSubscription: Subscription;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Posts[]) => {
        this.postsList = posts;
      }
    );
    // Recuperation des postes de Firebase
    this.postsService.getAllPosts();
    this.postsService.emitPosts();
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
