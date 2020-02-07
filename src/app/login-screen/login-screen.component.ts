import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  usuario: string;
  senha: string;

  constructor() { }

  ngOnInit() {
  }

  login(){
    //console.log(this.usuario, this.senha)
  }

}
