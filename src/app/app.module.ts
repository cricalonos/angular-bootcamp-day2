import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostService } from './services/post.service';

import { AppComponent } from './app.component';
import { PostComponent } from './components/publicacion/post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
