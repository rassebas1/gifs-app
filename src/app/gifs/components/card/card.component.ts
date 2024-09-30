import { Component, Input } from '@angular/core';
import { Gif, Type } from '../../../shared/interfaces/giphy.interfaces';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  public gif: Gif;

  constructor() {
    this.gif = {
      type: '',
      id: '',
      url: '',
      slug: '',
      bitly_gif_url: '',
      bitly_url: '',
      embed_url: '',

      source: '',
      title: '',
      content_url: '',
      source_tld: '',
      source_post_url: '',
      is_sticker: 0,
      analytics_response_payload: '',
      alt_text: '',
    };
  }
}
