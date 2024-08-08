import { Component,Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrl: './get-all-books.component.scss'
})
export class GetAllBooksComponent implements OnInit{
  @Input() AllBooks:any;
  constructor(private book:BookService,private router:Router){}
  ngOnInit(): void {
    this.GetAllBooks();
  }
  GetAllBooks(){
    this.book.getAllBooks().subscribe((response:any)=>{
      console.log(response);
      this.AllBooks=Object.values(response.data);
    })
  }
  DisplayBook(Book:any){
    this.router.navigate(['dashboard/bookdetails',+Book.bookId]);
  }
  BooksAvailable() : boolean{
    return this.AllBooks !== undefined;
  }
}
