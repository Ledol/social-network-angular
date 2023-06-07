import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DialogItemComponent} from './dialog-item/dialog-item.component';

const routes: Routes = [
  {path: ':id', component: DialogItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogsRoutingModule { }
