import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';

const routes: Routes = [
   { path: 'home', component: HomeViewComponent},
   { path: 'about', component: AboutViewComponent},
   { path: '', redirectTo: '/home', pathMatch: 'full'},
   { path: '**', component: PageNotFoundViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
