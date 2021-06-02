import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.sass'],
})
export class InfoSectionComponent implements OnInit {
  information = [
    {
      text: 'Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whe',
      image: 'fish',
    },
    {
      text: 'Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whe',
      image: 'reefSmall',
    },
    {
      text: 'Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whe',
      image: 'toxicSmall',
    },
  ];

  images = [
    { image: 'cig', style: 'cig-image' },
    { image: 'straws', style: 'straws-image' },
    { image: 'toxicBig', style: 'toxicBig-image' },
    { image: 'reef', style: 'reef-image' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
