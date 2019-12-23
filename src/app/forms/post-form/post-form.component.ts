import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  userId = new FormControl('');
  id = new FormControl('')
  title = new FormControl('');
  body = new FormControl('')
  constructor(public svc:PostService) { }

  ngOnInit() {
  }
  addPost(){
    let newPost = {userId:this.userId.value,id:this.id.value,title:this.title.value,body:this.body.value};
    console.log('ainsid addPost');
    console.log(this.svc.data);
    this.svc.addNewItem(newPost)
  }

}

