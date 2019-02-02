import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(
    public cookieService: CookieService,
    private http: HttpClient
  ) { }
}
