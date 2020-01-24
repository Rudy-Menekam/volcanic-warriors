import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-club-gallery',
  templateUrl: './club-gallery.component.html',
  styleUrls: ['./club-gallery.component.css']
})
export class ClubGalleryComponent implements OnInit {

  @Input() data: {
    captionText?: string,
    assetUrls?: string[]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
