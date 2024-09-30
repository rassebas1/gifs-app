import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Gif } from '../../../shared/interfaces/giphy.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-showcase',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-showcase.component.html',
  styleUrl: './card-showcase.component.css',
})
export class CardShowcaseComponent {
  @Input()
  public gifs: Gif[] = [];
}
