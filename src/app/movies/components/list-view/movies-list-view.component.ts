import { Component, OnInit} from '@angular/core';
import { Movie } from '../../entity/movie';
import { MovieService } from '../../service/movie-services';



@Component({
  selector: 'app-list-movie-view',
  templateUrl: './movies-list-view.component.html',
  styleUrls: ['./movies-list-view.component.css'],
  providers:[MovieService]
})

export class MoviesListViewComponent implements OnInit {
 
  items: Movie[];
 
  constructor(private movieService:MovieService) {

  }

  ngOnInit(): any {
    this.movieService.getAllMovies().subscribe((data: Movie[]) => this.items = data);
  }

 
}
