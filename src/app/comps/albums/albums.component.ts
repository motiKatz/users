import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(public svc:AlbumService) { }

  ngOnInit() {
  }

}
