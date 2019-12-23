import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {

  userId = new FormControl('');
  id = new FormControl('')
  title = new FormControl('');

  constructor(public svc:AlbumService) { }

  ngOnInit() {
  }

  addAlbum(){
    let newAlbum = {userId:this.userId.value,id:this.id.value,title:this.title.value};
    console.log('ainsid addAlbum');
    console.log(this.svc.data);
    this.svc.addNewItem(newAlbum)
  }

}
