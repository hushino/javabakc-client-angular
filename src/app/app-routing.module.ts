import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SerieComponent } from './components/serie/serie.component';
import { SerieByIdComponent } from './components/serie-by-id/serie-by-id.component';
import { EpisodeByIdComponent } from './components/episode-by-id/episode-by-id.component';
import { GenreByIdComponent } from './components/genre-by-id/genre-by-id.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series', component: SerieComponent },
  { path: 'series/:id', component: SerieByIdComponent },
  { path: ':id/:id2', component: EpisodeByIdComponent },
  { path: 'tag/genre/:id/:name', component: GenreByIdComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
