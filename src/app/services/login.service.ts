import { Injectable, Input } from '@angular/core';
import { User } from '../modelso/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Input() userName:string
  @Input() password:number

  users:User [] = []
  selctdUser:User

  x:boolean = false
  name:string

  constructor(public svc:UsersService) {}

// CheckLogin():boolean{
//   this.svc.data.subscribe(da=>{this.users = da;})
//   console.log(this.users);
//   let x = this.users.filter(user=>{return user.username == this.userName})
//   console.log(x);
//   if(x[0].id == this.password){
//     return true
//   }else{
//     alert ('wrong user name or password , try again')
//     return false
//   }
// }
}