import { Component, OnInit } from '@angular/core';
import { Classroom } from '../models';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-activity-screen',
  templateUrl: './activity-screen.component.html',
  styleUrls: ['./activity-screen.component.css']
})
export class ActivityScreenComponent implements OnInit {

  data:Classroom;
  username = localStorage.getItem("username");
  text:string;
  date

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit() {
    console.log("yo")
    this.data = JSON.parse(localStorage.getItem("materia"))
    console.log(this.data)
  }

  convertDate(){
    this.date = JSON.stringify(this.date).substring(1, 11)
    console.log(this.date)
  }

  details(activity){
    localStorage.setItem("selectedActivity", JSON.stringify(activity))
    localStorage.setItem("isOwner", ""+(this.data.Owner.username == this.username))
    this.router.navigateByUrl("/atividade")
  }

  createActivity(){
    var act = {
      classroom: this.data.uniqueCode,
      text: this.text,
      deadline:this.date,
      files:[]
    }
    this.api.createActivity(act).subscribe((data)=>{
      console.log(data)
      this.data.activities.push(data)
      localStorage.setItem("materia", JSON.stringify(this.data))
    })
  }

}
