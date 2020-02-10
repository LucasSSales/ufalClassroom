import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token, User, Classes, Question, Comentary, QuestionsSaved } from '../models';

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
    console.log("user")
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
  getClassroom(token){
    this.httpOptions.headers = this.httpOptions.headers.set("Authorization", "JWT " + token)
    console.log('TOKEN NA REQUISIÇÃO')
    console.log(token)
    console.log(this.httpOptions)
    const url = 'classroom/';
    return this.http.get<any>(this.rooturl+url, this.httpOptions)
  }

  //pega as turmas em que o user é um aluno
  getClassroomStudent(token){
    this.httpOptions.headers = this.httpOptions.headers.set("Authorization", "JWT " + token)
    console.log('TOKEN NA REQUISIÇÃO')
    console.log(token)
    console.log(this.httpOptions.headers)
    const url = 'classroom/student/';
    return this.http.get<any>(this.rooturl+url, this.httpOptions)
  }

  //cria uma turma nova
  createClass(className){
    const url = 'classroom/';
    console.log({name:className})
    return this.http.post<any>(this.rooturl+url, {name:className}, this.httpOptions);
  }

  //Matricula o user em uma turma
  registerInClass(classCode){
    const url = `classroom/${classCode}/join/`;
    return this.http.get<any>(this.rooturl+url, this.httpOptions);
  }

  //cria pergunta no forum
  createQuestion(question:Question){
    const url='forum/question/'
    return this.http.post<QuestionsSaved>(this.rooturl+url, question, this.httpOptions)
  }

    //cria resposta pra pergunta
    createComentary(comentary:Comentary){
      const url='forum/comentary/'
      return this.http.post<any>(this.rooturl+url, comentary, this.httpOptions)
    }

  createPost(post){
    const url='posts/post/'
    return this.http.post<any>(this.rooturl+url, post, this.httpOptions)
  }

  createActivity(activity){
    const url='activity/'
    return this.http.post<any>(this.rooturl+url, activity, this.httpOptions)
  }

  answerActivity(answer){
    const url = 'answer/'
    return this.http.post<any>(this.rooturl+url, answer, this.httpOptions)
  }

  setScore(activityId, score){
    const url = `activity/${activityId}/setscore/`
    return this.http.post<any>(this.rooturl+url, score, this.httpOptions)
  }

  


}
