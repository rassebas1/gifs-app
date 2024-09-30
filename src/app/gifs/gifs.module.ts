import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { CardShowcaseComponent } from './components/card-showcase/card-showcase.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageComponent,
    SearchComponent,
    CardComponent,
    CardShowcaseComponent,
    SharedModule,
  ],
  exports: [HomePageComponent],
})
export class GifsModule {}
