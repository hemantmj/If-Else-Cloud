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
  rowDataForTransactions:any;
  balance:any;
  moneyStats:any;

  constructor(public http:HttpClient) {
    this.http.get("https://1.api.fy23ey06.careers.ifelsecloud.com/").subscribe((response)=>{
      this.data=response;      
      if(this.data){
        this.rowDataForTransactions=this.data.transactions;
        this.balance=this.data.balance;
        this.moneyStats=this.data.money_statistics;
      }
        console.log(this.data);
    })

    
    console.log(this.rowDataForTransactions);
    

   }
}
