import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieViewComponent } from './list-movie-view.component';

describe('ListMovieViewComponent', () => {
  let component: ListMovieViewComponent;
  let fixture: ComponentFixture<ListMovieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMovieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
