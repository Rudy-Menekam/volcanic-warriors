import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSportsComponent } from './about-sports.component';

describe('AboutSportsComponent', () => {
  let component: AboutSportsComponent;
  let fixture: ComponentFixture<AboutSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
