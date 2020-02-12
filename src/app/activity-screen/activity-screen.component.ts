import { Component, OnInit } from '@angular/core';
import { Classroom } from '../models';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-activity-screen',
  templateUrl: './activity-screen.component.html',
  styleUrls: ['./activity-screen.component.css']
})
export class ActivityScreenComponent implements OnInit {

  data:Classroom;
  username = localStorage.getItem("username");
  text:string;
  date;
  files: Set<File>;
  filestring;

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit() {
    //console.log(this.data)
    this.data = JSON.parse(localStorage.getItem("materia"))
    console.log(this.data)
  }

  convertDate(){
    this.date = JSON.stringify(this.date).substring(1, 11)
    console.log(this.date)
  }

  details(activity){
    localStorage.setItem("selectedActivity", JSON.stringify(activity))
    localStorage.setItem("isOwner", ""+(this.data.Owner.username == this.username))
    this.router.navigateByUrl("/atividade")
  }

  getFile(event){
    //console.log(event.target.files[0].name)
    this.files = event.target.files

    var reader = new FileReader()
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
    //console.log(reader)
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.
    }

  createActivity(){
    var file = []
    if(this.files){
      file = [{filename:this.files[0].name, binary:this.filestring}]
    }
    var act = {
      classroom: this.data.uniqueCode,
      text: this.text,
      deadline:this.date,
      files:file
    }
    this.api.createActivity(act).subscribe((data)=>{
      console.log(data)
      this.data.activities.push(data)
      localStorage.setItem("materia", JSON.stringify(this.data))
      //this.files = undefined;
    })
  }





}
