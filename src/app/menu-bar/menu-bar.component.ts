import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    localStorage.removeItem("materia")
    localStorage.removeItem("token")
    localStorage.removeItem("selectedActivity")
    this.router.navigateByUrl("/")
  }

}
