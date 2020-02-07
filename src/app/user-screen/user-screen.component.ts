import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  materias = [{nome:"Linhas", prof:"Arturo"},{nome:"Etica", prof:"Olival"},{nome:"Gestão", prof:"Rafael Amorim"}]
  loading = true;

  constructor(private router:Router) { }

  ngOnInit() {
    //this.loading = false
  }

  openSubject(){
    this.router.navigateByUrl("/materia")
  }

}
