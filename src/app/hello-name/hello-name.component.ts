import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFont } from 'src/app/models/helloName.model.i';


@Component({
  selector: 'app-hello-name',
  templateUrl: './hello-name.component.html',
  styleUrls: ['./hello-name.component.scss']
})

export class HelloNameComponent implements OnInit {

  form: FormGroup;

  displayValue = '';
  fontFamily ='';
  alignText = '';
  fontSize = ''
  fonts: IFont[] = [
    {value: 'arial, sans-serif', viewValue: 'Arial (sans-serif)'},
    {value: 'verdana, sans-serif', viewValue: 'Verdana (sans-serif)'},
    {value: 'helvetica, sans-serif', viewValue: 'Helvetica (sans-serif)'},
    {value: 'tahoma, sans-serif', viewValue: 'Tahoma (sans-serif)'},
    {value: 'trebuchet ms, sans-serif', viewValue: 'Trebuchet MS (sans-serif)'},
    {value: 'times new roman, serif', viewValue: 'Times New Roman (serif)'},
    {value: 'georgia, serif', viewValue: 'Georgia (serif)'},
    {value: 'garamond, serif', viewValue: 'Garamond (serif)'},
    {value: 'courier new, monospace', viewValue: 'Courier New (monospace)'},
    {value: 'brush script mt, cursive', viewValue: 'Brush Script MT (cursive)'},
  ];
  positions = ['left', 'center', 'right'];

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      fontFamily: new FormControl(''),
      alignText: new FormControl(''),
      fontSize: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      this.displayValue = value.name;
      this.fontFamily = value.fontFamily;
      this.alignText = value.alignText;
      this.fontSize = value.fontSize;
      console.log(value);
    })
  }

}
