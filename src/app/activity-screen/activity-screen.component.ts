import { Component, OnInit } from '@angular/core';
import { Classroom } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-screen',
  templateUrl: './activity-screen.component.html',
  styleUrls: ['./activity-screen.component.css']
})
export class ActivityScreenComponent implements OnInit {

  data:Classroom;
  username = localStorage.getItem("username");

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("yo")
    this.data = JSON.parse(localStorage.getItem("materia"))
    console.log(this.data)
  }

  details(activity){
    localStorage.setItem("selectedActivity", JSON.stringify(activity))
    localStorage.setItem("isOwner", ""+(this.data.Owner.username == this.username))
    this.router.navigateByUrl("/atividade")
  }

}
