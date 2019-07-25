import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { GeneratetokenComponent } from './generatetoken/generatetoken.component';
import { RevoketokenComponent } from './revoketoken/revoketoken.component';
import { UpdatemappingsComponent } from './updatemappings/updatemappings.component';
import { SearchComponent } from './search/search.component';
import { MsearchComponent } from './msearch/msearch.component';
import { FetchapiComponent } from './fetchapi/fetchapi.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { RecentsearchesComponent } from './recentsearches/recentsearches.component';
import { TopsearchesComponent } from './topsearches/topsearches.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    GeneratetokenComponent,
    RevoketokenComponent,
    UpdatemappingsComponent,
    SearchComponent,
    MsearchComponent,
    FetchapiComponent,
    AutocompleteComponent,
    RecentsearchesComponent,
    TopsearchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
