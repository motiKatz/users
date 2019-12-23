import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './comps/to-dos/to-dos.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { ToDoFormComponent } from './forms/to-do-form/to-do-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Module } from './module/module';
import { UsersComponent } from './comps/users/users.component';
import { TheUsersFormsComponent } from './forms/the-users-forms/the-users-forms.component';
import { AlbumsComponent } from './comps/albums/albums.component';
import { PostsComponent } from './comps/posts/posts.component';
import { PostFormComponent } from './forms/post-form/post-form.component';
import { AlbumFormComponent } from './forms/album-form/album-form.component';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    SearchPipe,
    ToDoFormComponent,
    UsersComponent,
    TheUsersFormsComponent,
    AlbumsComponent,
    PostsComponent,
    PostFormComponent,
    AlbumFormComponent,
    NaviComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Module,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
