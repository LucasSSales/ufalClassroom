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
    console.log(localStorage)
    if(localStorage.getItem("username") != null){
      this.router.navigateByUrl("/home")
    }
  }

  login(){
    console.log(this.usuario, this.senha)
    localStorage.setItem("username", this.usuario)
    localStorage.setItem("password", this.senha)
    this.api.getToken({username:this.usuario, password:this.senha}).subscribe(
    data=>{
      console.log(data)
      localStorage.setItem("token", data.token)
      this.router.navigateByUrl("/home")
      //location.reload()
    }, 
    
    error=>{
      console.log(error)
    })
  }
  
  //['id', 'first_name', 'last_name', 'email', 'password']

}
