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

  loading = true;
  codigo;
  newMateria;
  student = []
  profesor = []

  constructor(private router:Router, private api:ApiService, 
    private route:ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.route.toString())
    this.getClassrooms()
  }

  getClassrooms(){
    console.log(localStorage.getItem("token"))
    this.api.getClassroom().subscribe(
      data=>{
        console.log(data)
        this.profesor = data
        this.loading = false;
      },
    );

    this.api.getClassroomStudent().subscribe(
      data=>{
        console.log(data)
        this.student = data
        this.loading = false;
      },
    );
  }


  openSubject(list, idx){
    //console.log(list[idx])
    localStorage.setItem("materia", JSON.stringify(list[idx]))
    //console.log(localStorage.getItem("materia"))
    this.router.navigateByUrl("/materia")
  }

  //d4d47448-ab48-47dc-8bbb-1042119d5d95

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
        this.api.createClass(result).subscribe((data)=>{
          console.log(data)
          this.loading = true;
          this.getClassrooms()
        }, 
      (error)=>{
        console.log(error)
      })
        this.newMateria = ""
      }else if(type=='register'){
        this.codigo = result
        this.api.registerInClass(result).subscribe(data=>{
          console.log(data)
          this.loading = true;
          this.getClassrooms()
        })
        this.codigo = ""
      }
  
    });
  }

}
