import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-sports',
  templateUrl: './about-sports.component.html',
  styleUrls: ['./about-sports.component.css']
})
export class AboutSportsComponent implements OnInit {

  @Input() data: {
    aboutThSports?: string,
    missionStatementText?: string,
    readMoreLinkUrl?: string,
    assets?: string[]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
