import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../modelso/post';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<Post>{

  constructor(public http:HttpClient) {
    super (http,"posts")
   }
}
