import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  @Input() data: {
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

  constructor() {
  }

  ngOnInit() {
  }

}
