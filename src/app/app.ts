import {Component, signal} from '@angular/core';
import {Home} from './home/home';
import {RouterModule} from '@angular/router';

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
        <router-outlet>

        </router-outlet>
      </section>
    </main>`,
  imports: [
    RouterModule
  ]
})

export class App {}
