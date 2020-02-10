import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models';
import { ApiService } from '../../services/api.service';

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

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.activity = JSON.parse(localStorage.getItem("selectedActivity"))
    
    console.log(this.activity)
    console.log(this.isOwner)
  }

  downloadFile(){
    console.log("quem sabe um dia")
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

  /*score(){
    this.api.setScore().subscribe(){
      (data)=>{
        console.log(data)
      }
    }
  }*/

}
