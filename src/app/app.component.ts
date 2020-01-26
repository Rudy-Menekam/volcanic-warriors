import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'volcanic-warriors';
  private navbarToggle = false;
  private programsToggle = false;
  private navbarDark = false;

  constructor(route: ActivatedRoute) {
    const component = route.component;
    console.log(component);
    if (typeof component === 'string') {
      this.navbarDark = component as string !== 'AppComponent';
    } else {
      this.navbarDark = component === AppComponent;
    }
  }
}
