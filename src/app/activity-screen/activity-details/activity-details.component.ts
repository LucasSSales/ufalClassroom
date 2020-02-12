import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models';
import { ApiService } from '../../services/api.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  activity:Activity;
  isOwner = localStorage.getItem("isOwner");
  comment:string
  loading = false
  files: Set<File>;
  filestring;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.activity = JSON.parse(localStorage.getItem("selectedActivity"))
    
    console.log(this.activity)
    console.log(this.isOwner)
  }

  downloadFile(){
    console.log(this.activity.files)
    //console.log()
    //saveAs(this.base64toBlob(this.activity.files[0].binary, "image/jpeg"), 'maki.jpg')
    saveAs(this.base64toBlob(this.activity.files[0].binary, "application/pdf"), this.activity.files[0].filename)
  }

  sendAnswer(){
    this.loading = true
    var ans = {
      activity: this.activity.id,
      comentary: this.comment,
      files: []
    }
    this.api.answerActivity(ans).subscribe(
      (data)=>{
        console.log(data)
        this.loading = false;
        this.comment = ""
      }
    )
  }

  setScore(id,score){
    this.api.setScore(id, score).subscribe(
      (data)=>{
        console.log(data)
        localStorage.setItem("selectedActivity", JSON.stringify(this.activity))
      }
    )
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

    //credits for this function
    //https://stackoverflow.com/questions/37203771/download-base64-data-using-javascript-ie11/37204096
    //https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    base64toBlob = function (base64Data, contentType) {
      contentType = contentType || '';
      var sliceSize = 1024;
      var byteCharacters = atob(base64Data);
      //var byteCharacters = decodeURIComponent(escape(window.atob(base64Data)))
      var bytesLength = byteCharacters.length;
      var slicesCount = Math.ceil(bytesLength / sliceSize);
      var byteArrays = new Array(slicesCount);
  
      for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
          var begin = sliceIndex * sliceSize;
          var end = Math.min(begin + sliceSize, bytesLength);
  
          var bytes = new Array(end - begin);
          for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
              bytes[i] = byteCharacters[offset].charCodeAt(0);
          }
          byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return new Blob(byteArrays, { type: contentType });
  }


}
