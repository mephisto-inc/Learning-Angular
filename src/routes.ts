import { ActivatedRouteSnapshot, ResolveFn, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Home } from './app/home/home';
import Details from './app/details/details';
import { Housing } from './app/housing';
import { HousingLocationInterface } from './app/housing-location-interface';

export const housingResolver: ResolveFn<HousingLocationInterface[]> = () => {
  const housingService = inject(Housing);
  return housingService.getAllHousingLocation();
};

export const housingLocationResolver: ResolveFn<HousingLocationInterface | undefined> = (route: ActivatedRouteSnapshot) => {
  const housingService = inject(Housing);
  const id = Number(route.paramMap.get('id'));
  return housingService.getHousingLocationById(id);
};

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
    resolve: {
      housingLocations: housingResolver
    }
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Details Page',
    resolve: {
      housingLocation: housingLocationResolver
    }
  }
];

export default routeConfig;
