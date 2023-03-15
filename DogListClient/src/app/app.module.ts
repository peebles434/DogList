import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';
import { GlobalHeaderBarComponent } from './components/global-header-bar/global-header-bar.component';
import { ColumnListComponent } from './components/column-list/column-list.component';
import { ColumnGalleryComponent } from './components/column-gallery/column-gallery.component';
import { BreedListComponent } from './components/breed-list/breed-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

 
@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    AboutViewComponent,
    PageNotFoundViewComponent,
    GlobalHeaderBarComponent,
    ColumnListComponent,
    ColumnGalleryComponent,
    BreedListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
