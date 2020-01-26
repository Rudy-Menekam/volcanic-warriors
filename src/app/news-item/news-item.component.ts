import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() news: {
    headLineMainText?: string,
    headLineDate: Date,
    author?: string,
    newsText?: string,
    outLinkUrl?: string,
    assetUrl?: string
  };

  constructor() {
  }

  ngOnInit() {
  }

}
