import { Component, OnInit } from '@angular/core';
import { Forum, Question, QuestionsSaved, Owner } from '../models';
import { runInThisContext } from 'vm';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  data:any;
  forum:Forum;
  newQuestion:string;
  yourAnswear:string;
  username = localStorage.getItem("username");

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("materia"))
    this.forum = this.data.Forum;
    console.log(this.username)
  }

  createQuestion(){
    var newQ = new Question(this.forum.id, this.newQuestion)
    //this.forum.questions.push(new QuestionsSaved())
    //console.log(this.data)
    this.api.createQuestion(newQ).subscribe(
      (data)=>{
        data.Owner = new Owner()
        data.Owner.username = this.username
        console.log(data)
        this.forum.questions.push(data)
        console.log(this.forum)
        localStorage.setItem("materia", JSON.stringify(this.data))
      }
    )
  }

  answearQuestion(question, idx){
    var newA = {question: question, comentary: this.yourAnswear}
    //console.log(question, idx, this.yourAnswear)
    this.api.createComentary(newA).subscribe(
      (data)=>{
        data.Owner = new Owner()
        data.Owner.username = this.username
        console.log(data)
        this.forum.questions[idx].answears.push(data)
        console.log(this.forum)
        localStorage.setItem("materia", JSON.stringify(this.data))
        this.yourAnswear = ""
      }
    )
  }

}
