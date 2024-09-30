import { Component, Input, OnInit } from '@angular/core';
import { ILoader } from '../../interfaces/loader.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent implements OnInit {
  @Input()
  public loaderItem!: ILoader;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.loaderItem.url) throw new Error('URL property  is required');
  }
  onLoad() {
    this.hasLoaded = true;
  }
}
