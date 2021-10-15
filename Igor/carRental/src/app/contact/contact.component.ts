import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contInfo = new FormGroup ({

  fName: new FormControl('', Validators.required),
  lName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required)
})

fData: Array<any> = [];

outPut() {
  if (this.contInfo.valid) {
this.fData.push (this.contInfo.value);
this.contInfo.reset();
// this.contInfo.reset();
console.log(this.fData)
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
