import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorSelectorComponent } from './components/actor-selector/actor-selector.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorsListService } from './services/actors-list.service';
import { MoviesDataService } from './services/movies-data.service';

@NgModule({
  declarations: [ AppComponent, ActorSelectorComponent, MoviesListComponent ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule ],
  providers: [ActorsListService, MoviesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
