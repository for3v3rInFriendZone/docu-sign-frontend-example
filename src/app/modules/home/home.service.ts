import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  docuUrl = 'http://localhost:8080/sign';

  constructor(private http: HttpClient) { }

  postDocument(request: RequestDocuSign): Observable<ResponseDocuSign> {
    return this.http.post<ResponseDocuSign>(this.docuUrl, request);
  }
}

export interface ResponseDocuSign {
  redirectUrl: string;
}

export interface RequestDocuSign {
  firstname: string;
  lastname: string;
  email: string;
}
