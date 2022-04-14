import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DatepickerComponent,
    multi: true
  }]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {

  private onChangefn!: Function;

  changeDate($event: NgbDateStruct): void{
    this.onChangefn($event);
  }

  constructor() { }

  writeValue(value: NgbDateStruct): void {
  
  }

  registerOnChange(fn: any): void {
    this.onChangefn = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState(isDisabled: boolean): void { }

  ngOnInit(): void {
  }

  model!: NgbDateStruct;
  minDate: NgbDateStruct = {year: 1900, month: 1, day: 1}
  maxDate: NgbDateStruct = {year: 2022, month: 12, day: 31}
  date!: {
    year: number, 
    month: number,
    day: number
  };

}
