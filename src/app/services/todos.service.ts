import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from '../modelso/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public api:Todos[]

  constructor(public http:HttpClient) {
     
      this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos/')
      .subscribe(data=>this.api=data)
      console.log(this.api,' You see the TodosService');
      
   }
}
