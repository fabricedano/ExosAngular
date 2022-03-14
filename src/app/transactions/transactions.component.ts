import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ITransaction } from 'src/app/models/transaction.model.i';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, AfterViewInit {

  pathTransaction = "/assets/data/transactions.json";
  currentTime : Date = new Date();

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];
  dataSource = new MatTableDataSource();


  constructor(private service: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.service.getTransactions(this.pathTransaction).subscribe((value)=> {
      this.dataSource.data = value;
    });

    setInterval(() => {
      this.currentTime = new Date(); 
    }, 1000)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  public navigate(transaction: ITransaction){
    this.router.navigate(['transactions', transaction.id]);
  }

}
