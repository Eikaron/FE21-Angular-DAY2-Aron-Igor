import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  title: string[] = ["n00b", "Acceptable", "VIP"];
  money: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  donate(){
      this.money += 10;
  }

}
