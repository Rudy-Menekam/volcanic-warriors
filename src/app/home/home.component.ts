import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private carouselAssets: { url: string, captionHeading?: string, captionText?: string }[] =
    [
      {
        captionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.',
        captionHeading: 'First Slide',
        url: '/assets/carousel-desktop-1.jpg'
      },
      {
        captionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.',
        captionHeading: 'Second Slide',
        url: '/assets/carousel-desktop-2.jpg'
      },
      {
        captionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.',
        captionHeading: 'Third Slide',
        url: '/assets/carousel-3.jpg'
      }
    ];

  private aboutSportsData: {
    aboutThSports?: string,
    missionStatementText?: string,
    readMoreLinkUrl?: string,
    assets?: string[]
  } = null;

  private trophiesData: {
    mainCaption?: string,
    assets?: {
      assetUrl?: string,
      captionText?: string,
      captionHeading: string
    }[]
  };

  private galleryData: {
    captionText?: string,
    assetUrls?: string[]
  } = {
    captionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.',
    assetUrls: [
      '/assets/home/gallery/1.jpg',
      '/assets/home/gallery/3.jpg',
      '/assets/home/gallery/4.jpg',
      '/assets/home/gallery/5.jpg',
      '/assets/home/gallery/6.jpg',
      '/assets/home/gallery/8.jpg',
      '/assets/home/gallery/9.jpg',
      '/assets/home/gallery/10.jpg',
      '/assets/home/gallery/11.jpg',
      '/assets/home/gallery/12.jpg',
      '/assets/home/gallery/13.jpg',
      '/assets/home/gallery/14.jpg',
      '/assets/home/gallery/15.jpg',
      '/assets/home/gallery/16.jpg',
      '/assets/home/gallery/17.jpg',
      '/assets/home/gallery/18.jpg',
      '/assets/home/gallery/19.jpg'
    ]
  };

  private latestNewsData: {
    mainCaptionText?: string,
    headLines: {
      headLineMainText?: string,
      headLineDate: Date,
      author?: string,
      newsText?: string,
      outLinkUrl?: string,
      assetUrl?: string
    }[]
  };

  private testimonialsData: {
    mainCaptionText?: string,
    testimonials?: {
      testifierAssetUrl?: string,
      testimonialText?: string,
      testifierName?: string
    }[]
  } = {
    mainCaptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.',
    testimonials: [
      {
        testifierAssetUrl: '/assets/testifier-1.jpg',
        testifierName: 'John Doe',
        testimonialText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.'
      },
      {
        testifierAssetUrl: '/assets/testifier-2.jpg',
        testifierName: 'Paul Jane',
        testimonialText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.'
      },{
        testifierAssetUrl: '/assets/testifier-3.jpg',
        testifierName: 'James Williams',
        testimonialText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.'
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
