import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marsupilami } from './marsupilami';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private friends: Marsupilami[];
  private apiFriends = '/api/amis';
  constructor(private http: HttpClient) { }


  getFriends(): Observable<Marsupilami[]> {
    return this.http.get<Marsupilami[]>(`${this.apiFriends}`);
  }

  addFriend(newMarsupilami: any): Observable<any> {
    return this.http.post(`${this.apiFriends}/${newMarsupilami._id}`, newMarsupilami);
  }

  deleteFriend(marsupilami: Marsupilami): Observable<Marsupilami> {
    return this.http.delete<Marsupilami>(`${this.apiFriends}/${marsupilami._id}`);
  }

}
