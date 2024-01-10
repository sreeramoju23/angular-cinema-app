import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../services/movies-data.service';
import { Observable, Subject, of, takeUntil } from 'rxjs';
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

  private ngUnsubscribe = new Subject<void>();

  constructor(private moviesDataService : MoviesDataService, private actorListService: ActorsListService) {}

  ngOnInit(): void {
    this.actorListService.filter$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(filter => {
       const filteredData = this.filterData(filter);
       //this.moviesDataService.setMoviesData(filteredData);     
      });
  }
  filterData(filter: any): void {
     this._movies$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(dataList => {
        const filteredData = filter ? dataList.filter(item => item.actorId === filter) : dataList;
        console.log(filteredData);
      });
     
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
