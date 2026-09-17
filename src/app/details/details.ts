import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {inject} from '@angular/core';
import {Housing} from '../housing';
import {HousingLocationInterface} from '../housing-location-interface';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  selector: 'app-details',
  styleUrl: './details.css',
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocationInterface?.photo"
           alt="Photo of {{ housingLocationInterface?.name }}">
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
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
})
class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: Housing = inject(Housing);
  housingLocationInterface: HousingLocationInterface | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocationInterface ) => {
      this.housingLocationInterface = housingLocationInterface;
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '');
  }
}

export default Details
