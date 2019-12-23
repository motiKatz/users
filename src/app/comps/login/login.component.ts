import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/modelso/user';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


userName:FormControl = new FormControl('')

password:FormControl = new FormControl('')

  users:User [] = []
  selctdUser:User

  constructor(public svc:UsersService,public logSvc:LoginService) { }

  ngOnInit() {
  }

  CheckLogin(){
    this.svc.data.subscribe(da=>{this.users = da;})
    console.log("this is the form username",this.userName.value);
    
    console.log(this.users);
    let y = this.users.filter(user=>{return user.username == this.userName.value})
    console.log(y);
    try {if(y[0].id == this.password.value){
       this.logSvc.x = true
    }
    }catch(error){
      alert ('wrong user name or password , try again')
       this.logSvc.x = false
    }
    this.logSvc.name = this.userName.value

    

  }

}

