import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from './comps/to-dos/to-dos.component';
import { SearchPipe } from './pipes/search.pipe';
import { ToDoFormComponent } from './forms/to-do-form/to-do-form.component';
import { UsersComponent } from './comps/users/users.component';
import { TheUsersFormsComponent } from './forms/the-users-forms/the-users-forms.component';
import { PostFormComponent } from './forms/post-form/post-form.component';
import { PostsComponent } from './comps/posts/posts.component';
import { AlbumFormComponent } from './forms/album-form/album-form.component';
import { AlbumsComponent } from './comps/albums/albums.component';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';

const routes: Routes = [
  
  {path:'addToDo', component: ToDoFormComponent},
  {path:'todos',component:ToDosComponent},
  {path:'search',component:SearchPipe},
  {path:'app-users',component:UsersComponent},
  {path:'addUser',component:TheUsersFormsComponent},
  {path:'addPost',component:PostFormComponent},
  {path:'posts',component:PostsComponent},
  {path:'addAlbum',component:AlbumFormComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'navi',component:NaviComponent},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'app-users',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
