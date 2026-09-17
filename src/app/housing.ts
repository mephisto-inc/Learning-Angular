import { Service } from '@angular/core';
import {HousingLocationInterface} from './housing-location-interface';

@Service()
export class Housing {
  url = "http://localhost:3000/locations"

  async getAllHousingLocation(): Promise<HousingLocationInterface[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInterface | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    const data = await response.json();
    return await data ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log('Application received: ', firstName, lastName, email);
  }
}
