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
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingList of filteredLocationList; track housingList) {
        <app-housing-location [housingLocationInterface]="housingList"></app-housing-location>
      }
    </section>
  `
})
export class Home {
  housingLocationList: HousingLocationInterface[] = [];
  filteredLocationList: HousingLocationInterface[] = [];
  housingService: Housing = inject(Housing);

  constructor() {
    this.housingService.getAllHousingLocation().then((housingLocationList) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(filter: string) {
    if (!filter) this.filteredLocationList = this.housingLocationList;
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city?.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
