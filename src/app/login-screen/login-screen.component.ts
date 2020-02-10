import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  usuario: string;
  senha: string;

  constructor(private api:ApiService, private router:Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(localStorage)
    if(localStorage.getItem("username") != null){
      this.router.navigateByUrl("/home")
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Ok", {
      duration: 3000,
    });
  }

  login(){
    console.log(this.usuario, this.senha)
    
    this.api.getToken({username:this.usuario, password:this.senha}).subscribe(
    data=>{
      console.log(data)
      localStorage.setItem("username", this.usuario)
        localStorage.setItem("password", this.senha)
      localStorage.setItem("token", data.token)
      
      this.router.navigateByUrl("/home")
      //location.reload()
    }, 
    
    error=>{
      console.log(error)
      this.openSnackBar("Usuário não encontrado")
    })
  }
  
  //['id', 'first_name', 'last_name', 'email', 'password']

}
