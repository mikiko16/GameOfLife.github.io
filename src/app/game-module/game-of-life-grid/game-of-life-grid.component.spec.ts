import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfLifeGridComponent } from './game-of-life-grid.component';

describe('GameOfLifeGridComponent', () => {
  let component: GameOfLifeGridComponent;
  let fixture: ComponentFixture<GameOfLifeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOfLifeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfLifeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
