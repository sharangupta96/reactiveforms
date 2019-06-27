import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) { }
  title = 'reactiveforms';
  //nested formGroup
  // registrationForm = new FormGroup({
  //   userName : new FormControl('Sharan'),
  //   password : new FormControl(),
  //   confirmPassword : new FormControl(),
  //   address : new FormGroup({
  //     city : new FormControl(),
  //     state : new FormControl(),
  //     postalCode : new FormControl()
  //   })
  // });


  //formgroup instance using formBuilder
  registrationForm = this.fb.group({
    userName: ['Vishwa'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  }

  )

  // setting form values
  loadApi() {
    this.registrationForm.patchValue({
      userName: 'yash'
    })

  }

  onSumit() {
    console.warn(this.registrationForm.value)
  }
  //setValue() can be used to change the value of the control.. 
  //setValue takes an object exactly similar to the control instance. It is used to set value for all form controls
  //The setValue() method strictly adheres to the structure of the form group
  //patchValue is used to set value for few form controls
  //The strict checks of the setValue() method help catch nesting errors in complex forms, while patchValue() fails silently on those errors.
}

