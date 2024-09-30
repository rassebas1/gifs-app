import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { CardShowcaseComponent } from '../../components/card-showcase/card-showcase.component';
import { GiphyService } from '../../services/giphy.service';
import { Gif } from '../../../shared/interfaces/giphy.interfaces';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchComponent, CardShowcaseComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  /**
   *
   */
  constructor(private gifService: GiphyService) {}
  get gifs(): Gif[] {
    return this.gifService.gifData;
  }
}
