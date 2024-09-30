import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  })
export class SearchComponent {
  @ViewChild('txtTagInput')
  public myTag!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GiphyService) {}

  searchTag() {
    const newTag = this.myTag.nativeElement.value;
    this.gifsService.addSearchTag(newTag);
    this.myTag.nativeElement.value='';
  }
}
