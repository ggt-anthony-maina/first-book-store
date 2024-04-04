import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  template: `
  <aside class="sidebar">
  <ul>
    <li><a routerLink="/home">Home</a></li>
    <li><a routerLink="/borrowed">Borrowed</a></li>
    <li><a routerLink="/returned">Returned</a></li>
    <li><a routerLink="/add">Add</a></li>
  </ul>
</aside>

  `,
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
