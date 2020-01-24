import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.css']
})
export class TrophiesComponent implements OnInit {

  @Input() data: {
    mainCaption?: string,
    assets?: {
      assetUrl?: string,
      captionText?: string,
      captionHeading: string
    }[]
  } = null;

  constructor() {
  }

  ngOnInit() {
  }

}
