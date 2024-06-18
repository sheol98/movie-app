import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MaterialMovieCardComponent } from "./components/material-movie-card/material-movie-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [MovieListComponent, MaterialMovieCardComponent]
})
export class AppComponent {
  title = 'angular-course';
}
