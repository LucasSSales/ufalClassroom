import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ufalClassroom';
  constructor(private route:ActivatedRoute){
    //console.log(this.route.params.)
  }
}
