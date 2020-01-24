import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubGalleryComponent } from './club-gallery.component';

describe('ClubGalleryComponent', () => {
  let component: ClubGalleryComponent;
  let fixture: ComponentFixture<ClubGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
