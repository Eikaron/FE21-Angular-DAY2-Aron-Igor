import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cars = [
  {
    name: 'Audi',
    img: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381__340.jpg'
  },
  {
    name: 'BMW',
    img: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381__340.jpg'
  },
  {
    name: 'Mercedes',
    img: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381__340.jpg'
  },
  {
    name : 'Porsche',
    img: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381__340.jpg'
  },
  {
    name: 'Nissan',
    img: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381__340.jpg'
  },
  {
    name: 'Toyota',
    img: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381__340.jpg'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
