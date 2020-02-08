import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-subject-screen',
  templateUrl: './subject-screen.component.html',
  styleUrls: ['./subject-screen.component.css']
})
export class SubjectScreenComponent implements OnInit {

  data;

  constructor(private router:Router) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("materia"))
    console.log(this.data)
    
  }

  goToForum(){
    this.router.navigateByUrl("/forum")
  }

}
