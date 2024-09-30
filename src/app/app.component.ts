import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GifsModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'gifs-app';
}
