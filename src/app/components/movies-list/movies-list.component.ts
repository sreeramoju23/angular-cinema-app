import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../services/movies-data.service';
import { Observable, Subject, filter, map, of, switchMap, takeUntil } from 'rxjs';
import { Movie } from '../../models/movies.model';
import { ActorsListService } from '../../services/actors-list.service';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent implements OnInit {

  _movies$ : Observable<Movie[]> = this.moviesDataService.getMoviesData();
  
  constructor(private moviesDataService : MoviesDataService) {}

  ngOnInit(): void {}
}
