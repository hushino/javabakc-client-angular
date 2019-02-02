import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EpisodeByIdComponent } from './components/episode-by-id/episode-by-id.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SerieComponent } from './components/serie/serie.component';
import { SerieByIdComponent } from './components/serie-by-id/serie-by-id.component';
import { GenreByIdComponent } from './components/genre-by-id/genre-by-id.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'angular2-cookie';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EpisodeByIdComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    SerieComponent,
    SerieByIdComponent,
    GenreByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faExclamationTriangle, faPencilAlt);
  }
}
