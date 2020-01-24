import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  @Input() data: {
    mainCaptionText?: string,
    testimonials?: {
      testifierAssetUrl?: string,
      testimonialText?: string,
      testifierName?: string
    }[]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
