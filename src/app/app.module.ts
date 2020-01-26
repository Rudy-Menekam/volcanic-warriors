import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './carousel/carousel.component';
import {AboutSportsComponent} from './about-sports/about-sports.component';
import {TrophiesComponent} from './trophies/trophies.component';
import {ClubGalleryComponent} from './club-gallery/club-gallery.component';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {NewsComponent} from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import {ScrollEventModule} from 'ngx-scroll-event';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    AboutSportsComponent,
    TrophiesComponent,
    ClubGalleryComponent,
    LatestNewsComponent,
    TestimonialsComponent,
    NewsComponent,
    NewsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ScrollEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
