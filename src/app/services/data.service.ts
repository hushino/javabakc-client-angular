import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Serie } from '../models/serie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private headers = new Headers({ 'Content-Type': 'application/json' });
  // serie: Serie;
  selectedSerie: Serie;
  serie: Serie[];

  constructor(private http: HttpClient) {
    this.selectedSerie = new Serie();
  }

  /* getUser(user: User) {
    const headerss = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // let headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/x-www-form-urlencoded'); , withCredentials: true ,responseType: 'text'
    return this.http.post<any>('http://localhost:8080/login/check/', user, { headers: headerss });
  } */

  addSerie(serie: Serie) {
    const headers = new HttpHeaders().set(
      'content-type', 'application/json',
    );
    return this.http.post('http://localhost:8080/v1/series/', serie, { headers });
  }
  updateSerie(serie: Serie) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch('http://localhost:8080/v1/series/' + `${serie.id}`, serie, { headers });
  }
  deleteSerie(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete('http://localhost:8080/v1/series/' + `${id}`, { headers });
  }

  // implementar el paginado con la url correcta
  getAll() {
    return this.http.get('http://localhost:8080/v1/series/');
  }
  getSerieById(id: number | string) {
    return this.http.get('http://localhost:8080/v1/series/' + `${id}`);
  }
  // episodes
  getHome() {
    return this.http.get('http://localhost:8080/v1/');
  }

  // --------episodes----------
  getEpisodeById(id: | string) {
    return this.http.get('http://localhost:8080/' + id);
  }
  getUniqueEpisode(serieId: number, episodeId: number) {
    return this.http.get('http://localhost:8080/' + serieId + '/' + episodeId);
  }
  // ------------tags-------------
  getTagsByGenre(id: number) {
    return this.http.get('http://localhost:8080/tag/getAllSerieByGenre/' + id);
  }
  getTagsOfSerie(id: number) {
    return this.http.get('http://localhost:8080/tag/' + id);
  }
}
