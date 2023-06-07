import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './home/profile/profile.component';
import {NewsComponent} from './home/news/news.component';
import {MusicComponent} from './home/music/music.component';
import {SettingComponent} from './home/setting/setting.component';
import {DialogsComponent} from './home/dialogs/dialogs.component';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'dialogs',
    component: DialogsComponent,
    loadChildren: () => import('./home/dialogs/dialogs.module').then(m => m.DialogsModule)},
  {path: 'news', component: NewsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'setting', component: SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
