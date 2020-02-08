import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateClassDialogComponent } from './create-class-dialog/create-class-dialog.component';
import { RegistrateClassDialogComponent } from './registrate-class-dialog/registrate-class-dialog.component';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  materias = [
    {nome:"Linhas", prof:"Arturo"},{nome:"Etica", prof:"Olival"},{nome:"Gestão", prof:"Rafael Amorim"},
    {nome:"Linhas", prof:"Arturo"},{nome:"Etica", prof:"Olival"},{nome:"Gestão", prof:"Rafael Amorim"}
  ]
  loading = false;
  codigo;
  newMateria;

  constructor(private router:Router, private api:ApiService, 
    private route:ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.route.toString())
    //this.loading = false
    this.api.getClassroom().subscribe(
      data=>{
        console.log(data)
        this.loading = false;
      },
    );
  }

  openSubject(){
    this.router.navigateByUrl("/materia")
  }

  openDialog(type:string){
    var dialogRef;
    if(type=='create'){
      dialogRef = this.dialog.open(CreateClassDialogComponent, {
        width: '250px',
        data: {nome: this.newMateria}
      });
    }else if(type=='register'){
      dialogRef = this.dialog.open(RegistrateClassDialogComponent, {
        width: '250px',
        data: {codigo: this.codigo}
      });
    }


    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if(type=='create'){
        this.newMateria = result
        //cria a materia
        this.newMateria = ""
      }else if(type=='register'){
        this.codigo = result
        //matricula
        this.codigo = ""
      }
  
    });
  }

}
