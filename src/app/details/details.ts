import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {inject} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-details',
  styleUrl: './details.css',
  template: ` <p>{{ housingLocationId }}</p> `,
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = 0;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
