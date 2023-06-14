import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProfileComponent} from './home/profile/profile.component';
import {NewsComponent} from './home/news/news.component';
import {MusicComponent} from './home/music/music.component';
import {MyPostsComponent} from './home/profile/my-posts/my-posts.component';
import {PostComponent} from './home/profile/my-posts/post/post.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DialogsComponent} from './home/dialogs/dialogs.component';
import {AppRoutingModule} from './app-routing.module';
import { SettingComponent } from './home/setting/setting.component';
import {DialogsModule} from './home/dialogs/dialogs.module';
import { ProfileInfoComponent } from './home/profile/profile-info/profile-info.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NewsComponent,
    MusicComponent,
    MyPostsComponent,
    PostComponent,
    DialogsComponent,
    SettingComponent,
    ProfileInfoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        AppRoutingModule,
        DialogsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
