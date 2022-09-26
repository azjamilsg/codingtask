import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputComponent } from '../shared/input/input.component';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent  {
  firstName = new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])
  lastName = new FormControl('',[
    Validators.minLength(3)
  ])
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  message = new FormControl('',[
    Validators.minLength(3),
    Validators.maxLength(120)
  ])
  
  
  contactusForm = new FormGroup({
   firstName : this.firstName,
   lastName : this.lastName,
   email : this.email,
   message : this.message

  })


  contactus() {
    console.log(this.contactusForm.value)
  }
}
