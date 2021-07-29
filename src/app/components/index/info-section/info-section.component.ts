import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.sass'],
})
export class InfoSectionComponent implements OnInit {
  information = [
    {
      text: '30% of fish have some degree of plastic that we consume as humans.',
      image: 'fish',
    },
    {
      text: 'More than 10% of reefs destroyed by plastic trash.',
      image: 'reefSmall',
    },
    {
      text: 'Toxic waste in the oceans cause problems in the entiretly of the ocean as well as our clouds.',
      image: 'toxicSmall',
    },
  ];

  images = [
    { image: 'cig', style: 'cig-image' },
    { image: 'straws', style: 'straws-image' },
    { image: 'toxicBig', style: 'toxicBig-image' },
    { image: 'reef', style: 'reef-image' },
  ];

  public screenWidth: any;

  constructor() {
    function infoFlex(id) {
      if (this.screenWidth > 900) {
        'column'
      } else if (id === 1) {
        'row-reverse'
      } else 'row'

    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
}
