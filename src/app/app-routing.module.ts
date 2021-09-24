import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ListComponent} from './list/list.component'
import { AddListComponent } from './add-list/add-list.component';
import { UpdateListComponent } from './update-list/update-list.component';

const routes: Routes = [
  {path:'' ,component : HomeComponent},
  {path:'list', component:ListComponent},
  {path:'add',component:AddListComponent},
  { path: 'list/:id', component: UpdateListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
