import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { GeneratetokenComponent } from './generatetoken/generatetoken.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'generatetoken', component: GeneratetokenComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
