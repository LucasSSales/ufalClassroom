import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-posts-screen',
  templateUrl: './posts-screen.component.html',
  styleUrls: ['./posts-screen.component.css']
})
export class PostsScreenComponent implements OnInit {


  data;
  username = localStorage.getItem("username");
  postagem:string;
  files: Set<File>
  filestring;
  teste = ""

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("materia"))
    console.log(this.data)
    
  }

  goToForum(){
    this.router.navigateByUrl("/forum")
  }

  post(){
      //console.log(this.filestring)
    var newPost = {text: this.postagem, classroom: this.data.uniqueCode, files: [
        {filename:this.files[0].name, binary:this.filestring}
    ]}
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
    console.log(event.target.files[0].name)
    this.files = event.target.files

    var reader = new FileReader()
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
    console.log(reader)
    //console.log(this.filestring)
    /*const selectedFiles = <FileList>event.srcElement.files
    this.files = new Set()
    //console.log(selectedFiles)
    for(let f in selectedFiles) {
      //console.log(selectedFiles[f])
      this.files.add(selectedFiles[f])
    };*/
    //console.log(this.files)
  }

  bs:string

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.bs = binaryString
    this.filestring = btoa(binaryString);  // Converting binary string data.
}

}
