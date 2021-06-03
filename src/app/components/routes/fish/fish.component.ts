import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.sass'],
})
export class FishComponent implements OnInit {
  images = ['seaBird', 'seaLion', 'turtle', 'fish', 'dolphins'];

  constructor() {}

  ngOnInit(): void {}
}
