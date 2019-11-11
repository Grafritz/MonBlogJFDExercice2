import { Posts } from '../models/Posts.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

export class PostsService {
    /*
    créer un service qui stockera l'array des posts et pourra les émettre sous forme de Subject
    — le service permettra également l'ajout d'un nouveau post et la suppression d'un post existant
    */
    noeudPost = '/posts';
    posts: Posts[] = [];
    postsSubject = new Subject<Posts[]>();

    constructor() {
        this.getAllPosts();
    }
    emitPosts() {
        this.postsSubject.next(this.posts);
    }
    saveAndEmitPosts() {
        // Enregistrer sur Firebase
        this.SaveAllPost();
        this.emitPosts();
    }
    getAllPosts() {
        firebase.database().ref(this.noeudPost)
        .on('value', (data) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
        });
    }

    // Methode pour enregistrer l'array des posts
    SaveAllPost() {
        firebase.database().ref(this.noeudPost).set(this.posts);
    }

    // Methode pour l'ajout d'un nouveau post
    addNewPost(newPost: Posts) {
        this.posts.push(newPost);
        // Enregistrer sur Firebase
        this.saveAndEmitPosts();
    }

    // Methode pour la Suppression d'un post existant
    deletePost(postToDelete: Posts) {
        const indexPost = this.posts.findIndex(
            (postEl) => {
                if ( postEl === postToDelete) {
                    return true;
                }
            }
        );
        this.posts.splice(indexPost, 1);
        // Enregistrer sur Firebase
        this.saveAndEmitPosts();
    }
    deletePostByIndex(indexPost: number) {
        this.posts.splice(indexPost, 1);
        // Enregistrer sur Firebase
        this.saveAndEmitPosts();
    }

    /* faire en sorte que le changement du nombre de loveIts soit enregistré dans le service */
    setLoveIt(indexPost: number) {
        this.posts[indexPost].loveIts += 1;
        this.saveAndEmitPosts();
    }
    setDontLoveIt(indexPost: number) {
    this.posts[indexPost].loveIts -= 1;
    this.saveAndEmitPosts();
    }

}
