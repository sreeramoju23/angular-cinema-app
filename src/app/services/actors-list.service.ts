import { Injectable } from "@angular/core";
import { Actor } from "../models/actor.model";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable()
export class ActorsListService {

    selectedActorId = 1;

    constructor() {}

    private actors: Actor[] = [
        {
            id: '1',
            name: 'Aamir Khan',
            age: 57
        },
        {
            id: '2',
            name: 'Salman Khan',
            age: 56
        },
        {
            id: '3',
            name: 'Tiger Shroff',
            age: 32
        }
    ];

    public getActors(): Observable<Actor[]> {
        return of(this.actors);
    }

    private filterSubject = new BehaviorSubject<string | null>(null);
    filter$ = this.filterSubject.asObservable();

    setFilter(filter: string): void {
      this.filterSubject.next(filter);
    }

}