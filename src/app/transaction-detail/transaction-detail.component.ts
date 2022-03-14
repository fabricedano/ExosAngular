import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ITransaction } from 'src/app/models/transaction.model.i';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  pathTransaction = "/assets/data";
  currentTime : Date = new Date();
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'description', 'date'];

  transaction$ : Observable<ITransaction> =  this.route.params.pipe(switchMap((params) => this.service.getTransactionById(this.pathTransaction, params['id'])));

  constructor(private service: TransactionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date(); 
    }, 1000);
  }

}
