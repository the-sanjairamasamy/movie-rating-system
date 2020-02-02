import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListViewComponent } from './movies-list-view.component';

describe('MoviesListViewComponent', () => {
  let component: MoviesListViewComponent;
  let fixture: ComponentFixture<MoviesListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
