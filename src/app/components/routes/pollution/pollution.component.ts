import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.sass'],
})
export class PollutionComponent implements OnInit {

images = [
  'cigerettes', 'wrappers', 'bottle', 'bagjpg', 'lid', 'spoons', 'straws', 'glassBottle', 'cans'
]

  constructor() {}

  ngOnInit(): void {}
}
