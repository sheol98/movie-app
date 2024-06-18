import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-movie-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './material-movie-card.component.html',
  styleUrl: './material-movie-card.component.scss',
})
export class MaterialMovieCardComponent {}
