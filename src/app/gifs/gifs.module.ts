import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { CardShowcaseComponent } from './components/card-showcase/card-showcase.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageComponent,
    SearchComponent,
    CardComponent,
    CardShowcaseComponent,
  ],
  exports: [HomePageComponent],
})
export class GifsModule {}
