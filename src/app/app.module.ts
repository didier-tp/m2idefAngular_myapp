import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChangeComponent } from './change/change.component';
import { RestChangeService } from './rest-change.service';

@NgModule({
  declarations: [
    AppComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule , FormsModule , HttpClientModule
  ],
  providers: [  RestChangeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
