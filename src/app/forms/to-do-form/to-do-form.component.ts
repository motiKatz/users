import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  constructor(public svc:TodosService) { }

  ngOnInit() {
  }

  
  userId = new FormControl('');
  title = new FormControl('');
  completed = new FormControl('');
  

  addTodo(){
    console.log(this.userId,this.title,this.completed)
    if(this.userId.value != "" && this.title.value != "" && this.completed.value != ""){
      let id = this.svc.api.length
      this.svc.api.push({
      userId:this.userId.value,
      id:id,
      title:this.title.value,
      completed: this.completed.value
    })
  }
    console.log(this.svc.api);
    this.userId = new FormControl('');
    this.title = new FormControl('');
    this.completed = new FormControl('');
    this.addToLocalS();
  }
  addToLocalS(){
    let value = JSON.stringify(this.svc.api)
    localStorage.setItem('toDosArry', value)
    console.log('toDosArry',localStorage.getItem('toDosArry'));
    
  }

}
