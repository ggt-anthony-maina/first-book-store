import { Component, Input } from '@angular/core';
import { Book } from '../book-location';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-location',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  template: `
  <section class="listing">
  <img class="listing-photo" [src]="book.photo" alt="Exterior photo of {{book.name}}">
  <h2 class="listing-heading">{{ book.name }}</h2>
  <p class="listing-location">{{ book.author}}, {{book.year }}</p>
  
</section>
  `,
  styleUrl: './book-location.component.css'
})
export class BookLocationComponent {
 @Input() book! : Book;
}
