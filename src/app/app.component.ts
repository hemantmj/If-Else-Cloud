import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workflows';
  data:any;

  constructor(public http:HttpClient) {
    this.http.get("https://1.api.fy23ey06.careers.ifelsecloud.com/").subscribe((response)=>{
      this.data=response;      
      console.log(this.data);
    })
    

   }
}
