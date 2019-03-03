import { Injectable } from '@angular/core';
import { Marsupilami } from './marsupilami';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarsupilamiService {
  // private marsupilamis: Marsupilami[];
  private apiUrl = '/api/marsupilamis';
  constructor(private http: HttpClient) { }

  getMarsupilamis(): Observable<Marsupilami[]> {
    return this.http.get<Marsupilami[]>(`${this.apiUrl}`);
  }

  addMarsupilami(newMarsupilami: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, newMarsupilami);
  }

  editMarsupilami(updatedMarsupilami: Marsupilami): Observable<Marsupilami> {
    return this.http.put<Marsupilami>(`${this.apiUrl}/${updatedMarsupilami._id}`, updatedMarsupilami);
  }

  getMarsupilami(idRecherche: string): Observable<Marsupilami> {
    return this.http.get<Marsupilami>(`${this.apiUrl}/${idRecherche}`);
  }

  deleteMarsupilami(marsupilami: Marsupilami): Observable<any> {
    const idASupprimer = marsupilami._id;
    return this.http.delete(`${this.apiUrl}/${idASupprimer}`);
  }

}
