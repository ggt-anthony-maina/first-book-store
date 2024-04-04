import { Injectable } from '@angular/core';
import { Book } from './book-location';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa'

  protected booksLocationList: Book[] = [

    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      author: 'Chicago',
      year: '2000',
      genre:'horror',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      author: 'Santa Monica',
      year: '2001',
      genre:'horror',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      author: 'Juneau',
      year: '2002',
      genre:'horror',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    // Add more entries with different years
    {
      id: 3,
      name: 'Homesteady Housing',
      author: 'Chicago',
      year: '2003',
      genre:'horror',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      author: 'Gary',
      year: '2004',
      genre:'horror',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    // Add more entries with different years
    {
      id: 5,
      name: 'Acme Fresh Start Housing',
      author: 'Chicago',
      year: '2000',
      genre:'horror',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'A113 Transitional Housing',
      author: 'Santa Monica',
      year: '2001',
      genre:'horror',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 7,
      name: 'Warm Beds Housing Support',
      author: 'Juneau',
      year: '2002',
      genre:'horror',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    // Add more entries with different years
    {
      id: 8,
      name: 'Homesteady Housing',
      author: 'Chicago',
      year: '2003',
      genre:'horror',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 9,
      name: 'Happy Homes Group',
      author: 'Gary',
      year: '2004',
      genre:'horror',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    // Add more entries with different years
    
  ]


  getAllBooks(): Book[]{
    return this.booksLocationList;
  }

  getBookById(id: number): Book | undefined{
    return this.booksLocationList.find(book => book.id === id);
  }
 
}
