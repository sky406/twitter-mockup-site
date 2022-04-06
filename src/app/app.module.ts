import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { LikeButtComponent } from './like-butt/like-butt.component';
import { RetweetsComponent } from './retweets/retweets.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LikeButtComponent,
    RetweetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
