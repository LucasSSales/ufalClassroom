import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rooturl = 'http://localhost:8000/api/'

  constructor(private http:HttpClient) { }

  getToken(user){
    console.log(user)
    const url = 'token/';
    return this.http.post<Token>(this.rooturl + url, user)
  }

  getClassroom(){
    const url = 'classroom/';
    return this.http.get(this.rooturl+url)
  }
}
