import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HttpClientModule } from '@angular/common/http';
import { TryitComponent } from './tryit/tryit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { GeneratetokenComponent } from './generatetoken/generatetoken.component';
import { RevoketokenComponent } from './revoketoken/revoketoken.component';
import { UpdatemappingsComponent } from './updatemappings/updatemappings.component';
import { SearchComponent } from './search/search.component';
import { MsearchComponent } from './msearch/msearch.component';
import { FetchbyidComponent } from './fetchbyid/fetchbyid.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { RecentsearchComponent } from './recentsearch/recentsearch.component';
import { TopsearchComponent } from './topsearch/topsearch.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    TryitComponent,
    GeneratetokenComponent,
    RevoketokenComponent,
    UpdatemappingsComponent,
    SearchComponent,
    MsearchComponent,
    FetchbyidComponent,
    AutocompleteComponent,
    RecentsearchComponent,
    TopsearchComponent
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
