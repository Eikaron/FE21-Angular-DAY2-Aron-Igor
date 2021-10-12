import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  donate: number = 10;

  donatePlus() {
  this.donate += 10;
}
  constructor() { }

  ngOnInit(): void {
  }

}
