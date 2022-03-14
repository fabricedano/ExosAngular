import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloNameComponent } from './hello-name/hello-name.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeTransactionsComponent } from './home-transactions/home-transactions.component'
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello-name', pathMatch: 'full'},
  { path: 'hello-name', component: HelloNameComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'transactions', component: HomeTransactionsComponent,
  children: [
    { path: '', component: TransactionsComponent },
    { path: ':id', component: TransactionDetailComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
