import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'volcanic-warriors';
  private navbarToggle = false;
  private programsToggle = false;

  private toggleNavBar() {
    this.navbarToggle = !this.navbarToggle;
  }

  private toggleProgramsToggle() {
    this.programsToggle = !this.programsToggle;
  }
}
