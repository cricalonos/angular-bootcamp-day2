import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostService } from './services/post.service';

import { AppComponent } from './app.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicacionComponent
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
