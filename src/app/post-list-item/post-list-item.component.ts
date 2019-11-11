import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Posts } from '../models/Posts.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  /*
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;
  */
  @Input() post: Posts;
  @Input() indexPost: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postsService.setLoveIt(this.indexPost);
  }

  onDontLoveIt() {
    this.postsService.setDontLoveIt(this.indexPost);
  }

  showDontLoveIt() {
    if ( this.post.loveIts <= -1 ) {
      return this.post.loveIts.toString().replace('-', '');
    }
  }
  onDeletePost() {
    if (confirm('Etes-vous sûr de vouloir supprimer le poste \n[ ' + this.post.title + ' ] ?')) {
      this.postsService.deletePost(this.post);
    } else {
      return null;
    }
  }
  onDeletePostByIndex() {
    if (confirm('Etes-vous sûr de vouloir supprimer le poste \n[ ' + this.post.title + ' ] ?')) {
      this.postsService.deletePostByIndex(this.indexPost);
    } else {
      return null;
    }
  }
  /*
  onDeletePost(postSelected: Posts) {
    if (confirm('Etes-vous sûr de vouloir supprimer le poste \n[ ' + postSelected.title + ' ] ?')) {
      this.postsService.deletePost(postSelected);
    } else {
      return null;
    }
  }
  onDeletePostByIndex(indexPost: number, postToDelete: Posts) {
    if (confirm('Etes-vous sûr de vouloir supprimer le poste \n[ ' + postToDelete.title + ' ] ?')) {
      this.postsService.deletePostByIndex(indexPost);
    } else {
      return null;
    }
  }
  */
}
