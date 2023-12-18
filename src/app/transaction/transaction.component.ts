import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input()
  rowData:any;
  colDefs=[
    {
      headerName:"Date",
      field:"date",
      width:200
    },
    {
      headerName:"Name",
      field:"name",
      width:150
    },
    {
      headerName:"Status",
      field:"status",
      width:100
    },
    {
      headerName:"Type",
      field:"type",
      width:100
    },
    {
      headerName:"Amount",
      field:"amount",
      width:100
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
