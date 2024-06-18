import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  imports: [MovieCardComponent, CommonModule],
})
export class MovieListComponent {
  favoriteList: any[] = [];
  watchList: any[] = [];
  pushToFavorite(item: any) {
    if (!this.favoriteList.includes(item)) this.favoriteList.push(item);
  }
  pushToWatchList(item: any) {
    if (!this.watchList.includes(item)) this.watchList.push(item);
  }
  deleteMovieInFavorite(movie: any) {
    this.favoriteList = this.favoriteList.filter((el) => el.id !== movie.id);
  }
  deleteMovieInWatchList(movie: any) {
    this.watchList = this.watchList.filter((el) => el.id !== movie.id);
  }
}
