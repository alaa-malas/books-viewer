import { Book } from "./book.model";
export class Results {
  list_name: string;
  list_name_encoded: string;
  bestsellers_date: Date;
  published_date: Date;
  published_date_description: string;
  next_published_date: Date;
  previous_published_date: Date;
  display_name: string;
  normal_list_ends_at: number;
  updated: string;
  books: Book[];
}
