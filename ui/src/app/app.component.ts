import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent,CommonModule, TopBarComponent, HomeComponent, RouterModule, RouterLink, RouterLinkActive],
  template: `<div class="container">
  <app-top-bar class="top-bar"></app-top-bar>
  <div class="main-content" >
    <app-side-bar class="sidebar"></app-side-bar>
    <router-outlet></router-outlet>
  </div>
</div>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
