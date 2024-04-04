import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  template: `
  <header class="top-bar">
  <div class="logo">
    <!-- Insert your logo here -->
    Bookstore Logo
  </div>
  <div class="settings">
    <!-- Insert your settings icon here -->
    sett
    <i class="fa fa-cog"></i>
  </div>
</header>
  `,
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
