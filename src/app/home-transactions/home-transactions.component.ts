import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-transactions',
  templateUrl: './home-transactions.component.html',
  styleUrls: ['./home-transactions.component.scss']
})
export class HomeTransactionsComponent implements OnInit {

  currentTime : Date = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date(); 
    }, 1000);
  }

}
