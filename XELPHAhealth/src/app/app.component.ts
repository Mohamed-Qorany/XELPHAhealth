import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideNavLinks=[
      {title:"Dashboard", path:"", active:true},
      {title:"Patients", path:"", active:false},
      {title:"Task", path:"", active:false},
      {title:"Calender", path:"", active:false},
      {title:"Messages", path:"", active:false}
  ]
}
