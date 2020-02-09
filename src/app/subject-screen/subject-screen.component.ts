import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Owner } from '../models';

@Component({
  selector: 'app-subject-screen',
  templateUrl: './subject-screen.component.html',
  styleUrls: ['./subject-screen.component.css']
})
export class SubjectScreenComponent implements OnInit {

  data;
  username = localStorage.getItem("username");
  postagem:string;
  files: Set<File>

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("materia"))
    console.log(this.data)
    
  }

  goToForum(){
    this.router.navigateByUrl("/forum")
  }

  post(){
    var newPost = {text: this.postagem, classroom: this.data.uniqueCode}
    console.log(newPost)
    this.api.createPost(newPost).subscribe(
      (data)=>{
        //data.Owner = new Owner()
        //data.Owner.username = this.username
        console.log(data)
        this.data.posts.push(data)
        //console.log(this.forum)
        localStorage.setItem("materia", JSON.stringify(this.data))
        this.postagem = ""
      }
    )
  }

  getFile(event){
    //console.log(event.srcElement.files)
    const selectedFiles = <FileList>event.srcElement.files
    this.files = new Set()
    //console.log(selectedFiles)
    for(let f in selectedFiles) {
      //console.log(selectedFiles[f])
      this.files.add(selectedFiles[f])
    };
    //console.log(this.files)
  }

  uploadFiles(){
    //console.log(this.files.size)
    var formdata = new FormData()
    var i = 0
    for(let file of this.files){
      console.log(i)
      formdata.append('file', file, file.name)
      i++;
      if(i>=this.files.size-2) break
    }
    console.log(formdata)
    this.api.createPost(formdata).subscribe(data=>{
      console.log("bom")
      console.log(data)
    },
  error=>{
    console.log("ruim")
    console.log(error)
  })
  }

}
