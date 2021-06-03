import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reefs',
  templateUrl: './reefs.component.html',
  styleUrls: ['./reefs.component.sass'],
})
export class ReefsComponent implements OnInit {
  infoText = [
    'About 270,000 tonnes of plastic float on the surface of our oceans and many more drift between two waters. Their impact on marine life is well identified: turtles, birds or marine mammals often die after ingesting plastic residues from can bags or packing rings that we dump into the environment. ',
    'Every year, plastics kill 1.5 million animals. However, the impact of plastics on reef-building corals had been ignored until now, perhaps because of their alleged distance from plastic sources. However, analysis of plastic debris in the oceans has shown that it can carry many bacteria, including some pathogens that cause coral disease.',
    'Joleah Lamb at Cornell University in Ithaca, New York, and her colleagues surveyed 159 reefs in the Asia-Pacific region for signs of disease and plastic pollution, and discovered a dramatic correlation: the likelihood of disease on a coral free of plastic waste was only 4%, but jumped to 89% on a coral blighted by plastic.',
  ];
  constructor() {}

  ngOnInit(): void {}
}
