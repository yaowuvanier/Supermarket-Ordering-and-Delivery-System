import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService } from '../author.service';
import { FormsModule } from '@angular/forms';  // for form

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})

export class AuthorsComponent {
  title = 'Authors'
  authors

  colSpan = 4

  constructor( service : AuthorService){
      this.authors = service.getAuthors()
  }

  getTitle(){
    return this.title
  }

}
