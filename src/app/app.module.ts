
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TryitComponent } from './tryit/tryit.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MsearchComponent } from './msearch/msearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchbyidComponent } from './fetchbyid/fetchbyid.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { RevoketokenComponent } from './revoketoken/revoketoken.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { RecentsearchComponent } from './recentsearch/recentsearch.component';
import { GeneratetokenComponent } from './generatetoken/generatetoken.component';
import { UpdatemappingsComponent } from './updatemappings/updatemappings.component';
import { TypesComponent } from './types/types.component';
import { ParamsComponent } from './params/params.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    GeneratetokenComponent,
    RevoketokenComponent,
    UpdatemappingsComponent,
    SearchComponent,
    MsearchComponent,
    FetchbyidComponent,
    AutocompleteComponent,
    RecentsearchComponent,
    TopsearchComponent,
    TryitComponent,
    TypesComponent,
    ParamsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
