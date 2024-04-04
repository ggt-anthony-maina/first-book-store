import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../books.service';
import { Book } from '../book-location';
import { BookLocationComponent } from '../book-location/book-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookLocationComponent, CommonModule ],
  template: `
  <section>
  <form>
    <input type="text" placeholder="Filter by city">
    <button class="primary" type="button">Search</button>
  </form>
</section>
<section class="results">
  <app-book-location
    *ngFor="let book of bookLocationList"
    [book]="book">
  </app-book-location>
</section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bookLocationList: Book[] = [];
  bookService: BooksService = inject(BooksService);

  constructor() {
    this.bookLocationList = this.bookService.getAllBooks();
  }

}
