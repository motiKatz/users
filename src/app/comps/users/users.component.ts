import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:number

  constructor(public svc:UsersService , public logSvc:LoginService) { 
    this.svc.data.subscribe(d=> this.users = d.length)
    console.log(this.users);
    console.log(this.svc.data);
    
    
  }

  ngOnInit() {
  }


}
