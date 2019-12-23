import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todos } from 'src/app/modelso/todos';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

 

  constructor(public svc:TodosService) { }

    
  
  ngOnInit() {
   
  }
 
  

  
  }


