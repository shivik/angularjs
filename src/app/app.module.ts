import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HttpClientModule } from '@angular/common/http';
import { TryitComponent } from './tryit/tryit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    TryitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonViewerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
