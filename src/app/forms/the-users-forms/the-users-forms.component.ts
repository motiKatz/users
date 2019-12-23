import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/modelso/user';

@Component({
  selector: 'app-the-users-forms',
  templateUrl: './the-users-forms.component.html',
  styleUrls: ['./the-users-forms.component.css']
})
export class TheUsersFormsComponent implements OnInit {

  id = new FormControl('');
  name = new FormControl('');
  username = new FormControl('');
  email = new FormControl('');

  constructor(private svc:UsersService) { }

  ngOnInit() {
  }

  addUser(){
    let newUser = {id:this.id.value,name:this.name.value,username:this.username.value,email:this.email.value};
    console.log('ainsid addUser');
    console.log(this.svc.data);
    this.svc.addNewItem(newUser)
  }

}
