import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {inject} from '@angular/core';
import {Housing} from '../housing';
import {HousingLocationInterface} from '../housing-location-interface';

@Component({
  imports: [],
  selector: 'app-details',
  styleUrl: './details.css',
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocationInterface?.photo" alt="Photo of {{ housingLocationInterface?.name }}">
    <section class="listing-description">
      <h2 class="listing-heading">{{ housingLocationInterface?.name }}</h2>
      <p class="listing-location">{{ housingLocationInterface?.city }}, {{ housingLocationInterface?.state }}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{ housingLocationInterface?.availableUnits }}</li>
        <li>Does this location have wifi: {{ housingLocationInterface?.wifi }}</li>
        <li>Does this location have laundry: {{ housingLocationInterface?.laundry }}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <button class="primary" type="button">Apply now</button>
    </section>
  </article>
  `,
})
class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: Housing = inject(Housing);
  housingLocationInterface: HousingLocationInterface | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingLocationInterface = this.housingService.getHousingLocationById(housingLocationId);
  }
}

export default Details
