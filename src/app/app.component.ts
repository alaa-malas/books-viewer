import { OnInit, Component } from '@angular/core';
import { BookService } from '../service/book.service';
import { Library } from 'src/model/library.model';
import { Book } from 'src/model/book.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  library?: Library;

  books: Book[];

  selectedBook: Book;

  displayDialog: boolean;

  displayHome: boolean = true;

  sortOptions: Object[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService
      .getLibrary()
      .subscribe(response => (this.library = response));
    if (this.library) {
      this.books = this.library.results.books;
    }

    console.log("this.books");
    console.log(this.books);

    this.sortOptions = [
      { label: "title", value: "title" },
      { label: "author", value: "author" }
    ];
  }

  onLoadBooks() {
    this.bookService
      .getLibrary()
      .subscribe(response => (this.library = response));
    this.books = this.library.results.books;
    this.displayHome = false;
  }

  selectBook(event: Event, book: Book) {
    this.selectedBook = book;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedBook = null;
  }

  onGoHome() {
    this.displayHome = true;
  }
}




