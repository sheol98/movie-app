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
  movies = [
    {
      id: 1,
      imgUrl: '../../../assets/img/Avengers_Infinity_War_poster.jpg',
      title: 'Месники: Війна нескінченності',
      rating: 8.3,
      time: 136,
      about:
        'Знавіснілий від бажання підпорядкувати собі світ Танос (Джош Бролін) зумів здобути наймогутніший артефакт в світі – Рукавичку Нескінченності. Він збирає камені вічності, щоб в його руках була зосереджена сила, якій немає рівних. Небезпека нависла над усім світом і єдині, хто могли б протистояти Таносу – це Месники. Але давно в минулому часи, коли вони пліч-о-пліч захищали планету. Чи зможуть герої помиритися заради нової місії?',
    },
    {
      id: 2,
      imgUrl: '../../../assets/img/Spider_man.jpeg',
      title: 'Людина-павук',
      rating: 6.6,
      time: 126,
      about:
        'Пітер Паркер, якого не поважали однолітки і полюбляли знущатись над ним, його найкращий друг Гаррі Осборн, син директора компанії «Оскорп», та таємне кохання Пітера і його сусідка Мері-Джейн Уотсон відвідували з групою учнів лабораторію генетиків. Там Пітера вкусив генетично модифікований павук, що втік, і його рука розпухла. Тим часом батько Гаррі, Норман Осборн намагався підписати контракт з військовими щодо газу, який підвищував швидкість, силу та витривалість. Проте він викликав агресію та галюцинації, тому перевагу було надано технологіям конкурентів «Оскорпа».',
    },
    {
      id: 3,
      imgUrl: '../../../assets/img/hulk.jpeg',
      title: 'Неймовірний Халк',
      rating: 6.9,
      time: 156,
      about:
        'Історія фізика Брюса Баннера, який отримав велику дозу гамма-променів під час свого ж експерименту, що перетворює його під час емоційного стресу в гігантського зеленого монстра Халка. Жахаючись своєї ж трансформації, вчений тікає у Бразилію, де живе у нетрях і намагається перемогти недугу за допомогою одного вченого з Нью-Йорку.',
    },
  ];
  favoriteList: any[] = [];
  watchList: any[] = [];
  pushToFavorite(item: any) {
    if (this.favoriteList.length === 0) this.favoriteList.push(item);
    else {
      let checkMovie = true;
      for (const movie of this.favoriteList) {
        if (item.id === movie.id) checkMovie = false;
      }
      if (checkMovie) this.favoriteList.push(item);
    }
    console.log(this.favoriteList);
  }
  pushToWatchList(item: any) {
    if (this.watchList.length === 0) this.watchList.push(item);
    else {
      let checkMovie = true;
      for (const movie of this.watchList) {
        if (item.id === movie.id) checkMovie = false;
      }
      if (checkMovie) this.watchList.push(item);
    }
    console.log(this.watchList);
  }
  deleteMovieInFavorite(movie: any) {
    this.favoriteList = this.favoriteList.filter((el) => el.id !== movie.id);
  }
  deleteMovieInWatchList(movie: any) {
    this.watchList = this.watchList.filter((el) => el.id !== movie.id);
  }
  a = 22;
}
