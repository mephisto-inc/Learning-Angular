import {Component, Input} from '@angular/core';
import {HousingLocationInterface} from '../housing-location-interface';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  styleUrl: './housing-location.css',
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocationInterface.photo"
           alt="Exterior photo of {{ housingLocationInterface.name }}">
      <h2 class="listing-heading">{{ housingLocationInterface.name }}</h2>
      <p class="listing-location">{{ housingLocationInterface.city }}, {{ housingLocationInterface.state }}</p>
      <a [routerLink]="['details', housingLocationInterface.id]" title="Learn more about {{ housingLocationInterface.name }}">Learn more</a>
    </section>`,
  imports: [
    RouterLink
  ]
})
export class HousingLocation {
  @Input() housingLocationInterface!: HousingLocationInterface;
}
