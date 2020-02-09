import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  activity:Activity;

  constructor() { }

  ngOnInit() {
    this.activity = JSON.parse(localStorage.getItem("selectedActivity"))
    console.log(this.activity)
  }

}
