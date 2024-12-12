import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = ' http://backend-api.com/api/users ';  
  

  constructor(private http: HttpClient) { }

    // Fetch users from the backend
    getUsers(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }


    updateUser(userId: string, user: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${userId}`, user);
    }
}
