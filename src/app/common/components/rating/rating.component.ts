import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/movies/entity/movie';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  constructor() {
  
  }

  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  review:string;
  inputName: string;
  Test:boolean = true;
  message: number = 0;
  
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  
  }
  
  onClick(rating: number): void {
    this.rating = rating;
    this.message =  this.itemId;
    this.review = rating == 5 ?'Awesome' : rating == 4? "Excellent" : rating == 3 ? "Good" : rating == 2 ? "Average" : "Poor";
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: this.rating,
      review: this.review
    });
  }
}
