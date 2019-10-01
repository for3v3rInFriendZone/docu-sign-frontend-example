import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ResponseComponent } from './modules/response/response.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { SignComponent } from './modules/sign/sign.component';
import { SafePipe } from './modules/pipes/safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResponseComponent,
    SignComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
