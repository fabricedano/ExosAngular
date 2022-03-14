import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ITransaction } from "../models/transaction.model.i";


@Injectable()
export class TransactionService {
    constructor(private httpClient: HttpClient){}

    getTransactions(path: string): Observable<ITransaction[]>{
        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" })
        };
        return this.httpClient.get<ITransaction[]>(path, httpOptions)
    }

    getTransactionById(path: string, id: string): Observable<ITransaction>{
        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" })
        };
        return this.httpClient.get<ITransaction>(`${path}/${id}.json`, httpOptions)
    }
}