import {Component, inject} from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInterface} from '../housing-location-interface';
import {Housing} from '../housing';

@Component({
  imports: [HousingLocation],
  selector: 'app-home',
  styleUrl: './home.css',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingList of housingLocationList; track housingList) {
        <app-housing-location [housingLocationInterface]="housingList"></app-housing-location>
      }
    </section>
  `
})
export class Home {
  housingLocationList: HousingLocationInterface[] = [];
  housingService: Housing = inject(Housing);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
  }

  getHousingLocationById(id: number): HousingLocationInterface | undefined {
    return this.housingService.getHousingLocationById(id);
  }
}
