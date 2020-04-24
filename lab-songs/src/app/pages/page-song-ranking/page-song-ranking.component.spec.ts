import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSongRankingComponent } from './page-song-ranking.component';

describe('PageSongRankingComponent', () => {
  let component: PageSongRankingComponent;
  let fixture: ComponentFixture<PageSongRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSongRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSongRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
