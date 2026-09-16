import {Component, signal} from '@angular/core';
import {Home} from './home/home';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>`,
  imports: [
    Home
  ]
})

export class App {}
