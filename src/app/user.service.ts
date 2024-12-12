import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = ' http://backend-api.com/api/users ';  // Base URL for the backend API to manage users
  

  constructor(private http: HttpClient) { }   // Inject HttpClient to make HTTP requests

    // Fetch users from the backend
    getUsers(): Observable<any> {
      return this.http.get<any>(this.apiUrl);  // Makes a GET request to fetch all users
    }

 // Update user information 
    updateUser(userId: string, user: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${userId}`, user);    // 'userId' is the ID of the user to update, and 'user' contains the new data
    }
}
 