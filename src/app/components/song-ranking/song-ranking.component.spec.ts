import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongRankingComponent } from './song-ranking.component';

describe('SongRankingComponent', () => {
  let component: SongRankingComponent;
  let fixture: ComponentFixture<SongRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
