import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NourritureService {
  private apiUrl = '/api/nourritures';

  constructor(private http: HttpClient) { }

  getNourritures(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}`);
  }

}

