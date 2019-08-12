import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { TypesComponent } from './types/types.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'generatetoken', component: GeneratetokenComponent },
  { path: 'revoketoken', component: RevoketokenComponent },
  { path: 'updatemappings', component: UpdatemappingsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'msearch', component: MsearchComponent },
  { path: 'fetchbyid', component: FetchbyidComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'recentsearch', component: RecentsearchComponent },
  { path: 'topsearch', component: TopsearchComponent },
  { path: 'types', component: TypesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
