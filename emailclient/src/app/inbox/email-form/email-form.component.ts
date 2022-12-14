import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup
  @Input() email!: Email
  @Output() emailSubmit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    const { subject, from, to, text } = this.email
    
    this.emailForm = new FormGroup({
      to: new FormControl(to, [
        Validators.required,
        Validators.email
      ]),
      from: new FormControl({value: from, disabled: true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    })
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return
    }

    // console.log(this.emailForm.value); // miss value from, cause it's disabled    
    console.log(this.emailForm.getRawValue());
    /* getRawValue() give us all the different values of the form, even if one value or one field 
    has been marked as disabled. */
    
    this.emailSubmit.emit(this.emailForm.value)
  }

}
