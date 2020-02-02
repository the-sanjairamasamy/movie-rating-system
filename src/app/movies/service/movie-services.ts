import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Movie } from '../entity/movie';


@Injectable({
  providedIn:'root'
})
export class MovieService {
    items:Movie[]; 

    constructor(private http: HttpClient) {
  
    }

  // Returns all the movies
    getAllMovies():any{
        return this.http.get<Movie[]>("./assets/data-source.json");
    }


 
}