import { Injectable } from "@angular/core";
import { Movie } from "../models/movies.model";
import { Observable, of } from "rxjs";

@Injectable()
export class MoviesDataService {

    constructor() {}

    private Movies : Movie[] = [
        {
            id: '1',
            actorId: '1',
            name: '3 Idiots',
            rating: 8.4,
          },
          {
            id: '1',
            actorId: '1',
            name: 'Talaash',
            rating: 2,
          },
          {
            id: '2',
            actorId: '2',
            name: 'Bajranji Bhaijan',
            rating: 3.1,
          },
          {
            id: '2',
            actorId: '2',
            name: 'Tere Naam',
            rating: 4.5,
          },
          {
            id: '2',
            actorId: '2',
            name: 'Andaz Apna Apna',
            rating: 8.1,
          },
          {
            id: '3',
            actorId: '3',
            name: 'Heropanti',
            rating: 3.5,
          },
    ];

    public getMoviesData():Observable<Movie[]> {
      return of(this.Movies);
    }

    public setMoviesData(movies: Movie[]) {
      this.Movies = movies;
    }

}