import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GiphyService } from '../../../gifs/services/giphy.service';

@Component({
  selector: 'sidebar-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GiphyService) {}
  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }
  getPreviousResult(previousTag: string): void {
    this.gifsService.addSearchTag(previousTag);
  }
}
