import { Routes } from '@angular/router';
import { Home } from './app/home/home';
import {Details} from './app/details/details';

const routeConfig: Routes = [
  { path: '', component: Home , title: 'Home Page' },
  { path: 'details/:id', component: Details , title: 'Details Page' }
];

export default routeConfig;
