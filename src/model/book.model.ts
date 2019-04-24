export class Book {
  primary_isbn10: number;
  primary_isbn13: number;
  publisher: string;
  description: string;
  title: string;
  author: string;
  contributor: string;
  book_image: string;
  buy_links: [
    {
      name: string;
      url: string;
    }
  ];
}
