import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../modelso/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {

  constructor(public http:HttpClient) { 
    super(http,"users")
  }
}
