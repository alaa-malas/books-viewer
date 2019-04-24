import { DataTableModule, PaginatorModule, DialogModule, PanelModule, CardModule  } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { BookService } from 'src/service/book.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataViewModule,
    DataTableModule,
    PaginatorModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    DialogModule,
    PanelModule,
    CardModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
