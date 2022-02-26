import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfLifeLayoutComponent } from './game-of-life.component';

describe('GameOfLifeComponent', () => {
  let component: GameOfLifeLayoutComponent;
  let fixture: ComponentFixture<GameOfLifeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOfLifeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfLifeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
