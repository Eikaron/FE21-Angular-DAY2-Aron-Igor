import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  
  data = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", Validators.required),
    msg: new FormControl("", Validators.required)
  });

  constructor() { }

  formSubmit(){
    if (this.data.valid){
    console.log(this.data.value);
    alert("Yay! It works")
    }
  }

  ngOnInit(): void {
  }

}
