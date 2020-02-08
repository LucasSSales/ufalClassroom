import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token, User, Classes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rooturl = 'http://localhost:8000/api/'
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Content-Type':  'application/json',
      'Authorization' : 'JWT ' + localStorage.getItem('token'),
    })
  };

  constructor(private http:HttpClient) { }

  getToken(user){
    console.log(user)
    const url = 'token/';
    return this.http.post<Token>(this.rooturl + url, user)
  }

  postUser(user:User){
    console.log(user)
    const url = 'users/createuser/';
    return this.http.post<any>(this.rooturl+url, user)
  }

  //pega as turmas onde o user é o professor
  getClassroom(){
    const url = 'classroom/';
    return this.http.get<any>(this.rooturl+url, this.httpOptions)
  }

  //pega as turmas em que o user é um aluno
  getClassroomStudent(){
    const url = 'classroom/student/';
    return this.http.get<any>(this.rooturl+url, this.httpOptions)
  }

  //cria uma turma nova
  createClass(className){
    const url = 'classroom/';
    return this.http.post<any>(this.rooturl+url, {name:className}, this.httpOptions);
  }

  //Matricula o user em uma turma
  registerInClass(classCode){
    const url = `classroom//${classCode}/join/`;
    return this.http.get<any>(this.rooturl+url, this.httpOptions);
  }


}
