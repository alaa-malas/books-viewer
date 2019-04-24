import { Library } from './../model/library.model';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookService {
  booksApiUrl =
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5wkVc11AYvuvwGFMgz2a0OFhRTZZ9Giw";

  constructor(private http: HttpClient) {}

  getLibrary() {
    return this.http.get<Library>(this.booksApiUrl);
  }
}
