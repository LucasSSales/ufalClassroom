import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  user:User = new User();
  confPaswd="";

  constructor(private api:ApiService, private router:Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Ok", {
      duration: 3000,
    });
  }

  hasBlank(){
    if(!this.user.email || !this.user.last_name || !this.user.first_name 
      || !this.user.username || !this.user.password){
        return true
    }
    return false
  }

  register(){
    console.log(this.user)
    if(this.hasBlank()){
      this.openSnackBar("Dados faltando!")
    }else if(this.confPaswd != this.user.password){
      this.openSnackBar("Senhas não batem!")
    }else{
      this.api.postUser(this.user).subscribe(
        data=>{
          console.log(data)
          this.openSnackBar("Cadastrado com sucesso!")
          this.router.navigateByUrl("/")
        },
        error =>{
          console.log(error)
          this.openSnackBar("Dados inválidos")
        }
      )
    }
    //if(this.confPaswd != user.)
    /**/
  }

}
