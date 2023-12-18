import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent implements OnInit {

  @Input()
  balance:any;

  constructor() { }

  ngOnInit(): void {
  }

}
