import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInterface} from '../housing-location-interface';

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
      @for (housingList of filteredLocationList; track housingList.id) {
        <app-housing-location [housingLocationInterface]="housingList"></app-housing-location>
      }
    </section>
  `
})
export class Home {
  private route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationList: HousingLocationInterface[] = [];
  filteredLocationList: HousingLocationInterface[] = [];

  constructor() {
    const locations = this.route.snapshot.data['housingLocations'] ?? [];
    this.housingLocationList = locations;
    this.filteredLocationList = locations;
  }

  filterResults(filter: string) {
    if (!filter) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city?.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
