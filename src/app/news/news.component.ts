import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollEvent} from 'ngx-scroll-event';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private newsData:
    {
      headLineMainText?: string,
      headLineDate: Date,
      author?: string,
      newsText?: string,
      outLinkUrl?: string,
      assetUrl?: string
    }[] = [
    {
      assetUrl: null,
      author: 'Bekondo Conrad',
      headLineDate: new Date(Date.now()),
      headLineMainText: 'Something has just happened',
      newsText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc a rhoncus sagittis, orci velit dapibus risus, vitae pretium lectus ex sit amet orci. Pellentesque sit amet metus a nibh rhoncus imperdiet. Praesent accumsan enim non felis dapibus lacinia. Nam gravida porta massa, ut luctus lacus vestibulum at. Aenean sed sem nec eros vestibulum facilisis. Nullam in dapibus metus, vel vulputate ante. Cras condimentum sapien lacus, ac viverra nulla faucibus quis. Cras vestibulum fermentum leo. Sed non vestibulum ante. Phasellus mollis facilisis metus aliquam volutpat. Sed hendrerit tellus a elementum vestibulum. Duis euismod semper iaculis. Integer scelerisque urna sit amet interdum auctor. Donec molestie vitae risus non facilisis. Morbi ut vestibulum dolor.\n' +
        '\n' +
        'Aenean et sagittis libero, at vulputate nunc. Praesent molestie arcu eget justo consectetur imperdiet. Suspendisse sagittis aliquet vulputate. Fusce in facilisis mi. Cras sit amet sem sagittis, pellentesque nunc nec, luctus orci. Fusce nec sagittis risus. Morbi eleifend mauris at fermentum molestie. Vivamus consequat ultricies diam, eget ornare libero imperdiet nec. Nunc in ex nec lectus iaculis pellentesque. Nullam vulputate ex a lectus vulputate cursus. Maecenas fringilla odio sed mauris suscipit placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet ullamcorper dolor.\n' +
        '\n' +
        'Vestibulum fringilla facilisis lectus. Mauris id leo eget nunc rhoncus malesuada. In sapien turpis, auctor sit amet urna quis, auctor porttitor metus. Donec rhoncus ipsum sed dapibus tempus. Nunc non leo ultrices, iaculis est vulputate, faucibus lectus. Nunc rhoncus eros lorem, ac sollicitudin felis aliquam a. Curabitur porttitor fermentum nisi nec bibendum. Proin gravida purus lobortis nibh aliquam aliquam. Pellentesque elementum velit et tellus tristique, id vestibulum ex pharetra. Morbi aliquam fermentum erat et viverra. Curabitur ullamcorper hendrerit fringilla. Donec imperdiet, lorem id sollicitudin dictum, lectus diam vehicula quam, quis ullamcorper sem elit vitae ante.\n' +
        '\n' +
        'Morbi accumsan nulla posuere, finibus mi ut, tempus metus. Duis ornare nibh massa, eget egestas urna efficitur sit amet. Proin finibus ipsum at faucibus tincidunt. Suspendisse gravida semper commodo. Fusce sed gravida est, in pulvinar odio. Nulla a suscipit felis, nec fermentum urna. Fusce urna turpis, sodales et ultricies ac, pretium non nulla. Donec ante eros, congue sit amet suscipit a, tristique nec sem. Suspendisse posuere turpis vitae rhoncus placerat. Aliquam maximus porttitor egestas. Ut dapibus bibendum ornare. Vivamus viverra efficitur laoreet. Sed augue elit, egestas eget gravida nec, condimentum sed quam. Pellentesque congue urna purus, vel malesuada arcu condimentum at.',
      outLinkUrl: 'https://facebook.com'
    },
    null
  ];

  constructor(route: ActivatedRoute) {
    console.log(route);
  }

  ngOnInit() {
  }

  private reachingBottom(event: ScrollEvent) {
    if (event.isReachingBottom) {
      console.log('reaching bottom, should update');
    }
  }
}
