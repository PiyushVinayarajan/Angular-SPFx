import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgxCarouselModule } from 'ngx-carousel';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule,NgxCarouselModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }