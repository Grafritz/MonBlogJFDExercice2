import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Posts } from '../models/Posts.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postsService: PostsService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    // const myDateNow = Date.now().toString();
    // console.log('Date: ' + myDateNow);
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Posts(title, content, 0, Date.now().toString());
    // newPost.createdAt = myDateNow;

    this.postsService.addNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
