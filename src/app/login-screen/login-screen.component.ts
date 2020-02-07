import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  usuario: string;
  senha: string;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.usuario, this.senha)
    this.api.getToken({username:this.usuario, password:this.senha}).subscribe(
    data=>{
      console.log(data)
      localStorage.setItem("token", data.token)
      this.router.navigateByUrl("/home")
    }, 
    
    error=>{
      console.log(error)
    })
  }
  
  //['id', 'first_name', 'last_name', 'email', 'password']

}
