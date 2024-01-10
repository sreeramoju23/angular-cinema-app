import { Component, EventEmitter } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Actor } from '../../models/actor.model';
import { ActorsListService } from '../../services/actors-list.service';
import { MoviesDataService } from '../../services/movies-data.service';

@Component({
  selector: 'actor-selector',
  templateUrl: './actor-selector.component.html',
  styleUrl: './actor-selector.component.css'
})
export class ActorSelectorComponent {
  _actors$: Observable<Actor[]> = this.actorDataService.getActors();

  actorModel: any;  

  constructor(private actorDataService: ActorsListService,
    private moviesDataService: MoviesDataService) {}

  ngOnInit(): void {
    this._actors$ = this._actors$.pipe(
      map((actor) => actor.filter((r) => r.age > 35))
    );
  } 
  selectedActor(value: any) : void {
    this.actorDataService.setFilter(value); 
  }
}
