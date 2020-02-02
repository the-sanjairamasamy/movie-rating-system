import { Component, OnInit} from '@angular/core';
import { Movie } from '../../entity/movie';
import { MovieService } from '../../service/movie-services';



@Component({
  selector: 'app-list-movie-view',
  templateUrl: './list-movie-view.component.html',
  styleUrls: ['./list-movie-view.component.css'],
  providers:[MovieService]
})

export class ListMovieViewComponent implements OnInit {
 
  items: Movie[];
 
  constructor(private movieService:MovieService) {

  }

  ngOnInit(): any {
    this.movieService.getAllMovies().subscribe((data: Movie[]) => this.items = data);
  }

 
}
