import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IHistory, IOperator } from 'src/app/models/calculator.model.i';

const RESULT_HISTORY: IHistory[] = [];

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {


  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  displayedColumns: string[] = ['date', 'operator', 'resultat', 'delete'];
  dataSource = RESULT_HISTORY;
  form: FormGroup;
  currentTime : Date = new Date();

  resultat = 0;

  get numberOneField (): AbstractControl {
    return this.form.controls['numberOne'];
  }

  get operatorField (): AbstractControl {
    return this.form.controls['operator'];
  }

  get numberTwoField (): AbstractControl {
    return this.form.controls['numberTwo'];
  }
  
  operators: IOperator[] = [
    {value: '+', viewValue: '+'},
    {value: '-', viewValue: '-'},
    {value: '*', viewValue: '*'},
    {value: '/', viewValue: '/'},
  ];

  constructor() {
    this.form = new FormGroup({
      numberOne: new FormControl('', [Validators.required]),
      operator: new FormControl('', [Validators.required]),
      numberTwo: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit(): void {
  }
  

  calcul() {
    if(this.form.valid){
      this.resultat =  eval(`${this.numberOneField.value} ${this.operatorField.value} ${this.numberTwoField.value}`);
      this.addRowResult();
    } else {
      alert('Veuillez remplir les champs et sélectionner un opérateur');
    }
  }

  addRowResult(){
    let currentTime : Date = new Date();
    let index = 0;
    while(index < this.dataSource.length) {
      index++;
    }
    this.dataSource.push({
      id: index,
      date: currentTime,
      operator: `${this.numberOneField.value} ${this.operatorField.value} ${this.numberTwoField.value}`,
      resultat: this.resultat,
      Delete: 'delete'
    });
    this.table.renderRows();
  }

  deleteRowResult(row_result:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_result.id;
    });
  }

}
