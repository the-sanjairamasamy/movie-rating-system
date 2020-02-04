import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Movie } from '../entity/movie';
import { Observable } from 'rxjs';
import { of } from 'rxjs'; 

@Injectable({
  providedIn:'root'
})
export class MovieService {
    items:Movie[]; 

    constructor(private http: HttpClient) {
  
    }

  
    getAllMovies(): Observable<Movie[]>{
        return this.http.get<Movie[]>("./assets/data-source.json");
    }

    createMovie(payload: Movie): any{
      return of(payload);
    }

    updateMovie(payload: Movie) {
      return of(payload);
    };

    deleteMovie(payload: any) {
      return of(payload);
    };
    

 
}