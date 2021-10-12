import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  cars: any = [{
    brand: "Fiat",
    model: "SomeModel",
    price: 15000,
    img: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg"
  },{
    brand: "Volvo",
    model: "XYZ 2021",
    price: 20000,
    img: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg"
  },{
    brand: "BMW",
    model: "Fancyrichcar",
    price: 40000,
    img: "https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918407_960_720.jpg"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
