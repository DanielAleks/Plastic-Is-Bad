import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.sass'],
})
export class FishComponent implements OnInit {
  images = ['seaBird', 'seaLion', 'turtle', 'fish', 'dolphins'];

  x = 0;

  upHandler = () => {
    this.x += 100;
  };
  downHandler = () => {
    this.x -= 100;
  };

  constructor() {}

  ngOnInit(): void {}
}
