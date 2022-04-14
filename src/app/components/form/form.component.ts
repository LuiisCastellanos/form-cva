import { Component, Input, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Lang {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};

  langs: Lang[] = [
    {value: '1', viewValue: 'Español'},
    {value: '2', viewValue: 'Ingles'},
    {value: '3', viewValue: 'Frances'},
  ];

  signupForm!: FormGroup;

  onSubmit(){
    console.log(this.signupForm.value)
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initForm()
  }

  isValidField(field: string): string {
    const validatedField = this.signupForm.get(field);
    return (!validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      gender: ['', Validators.required],
      lang: ['', Validators.required],
      date: ['', Validators.required],
      time: ['']
    })
  }

}
