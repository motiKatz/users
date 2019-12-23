import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Album } from '../modelso/album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseService<Album>{

  constructor(public http:HttpClient) {
    super (http,"albums")
   }
}
