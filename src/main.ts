import { Component, effect, Input, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="image-container"></div>
  `,
})
export class App {}

bootstrapApplication(App);
