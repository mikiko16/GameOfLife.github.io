import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfLifeControlsComponent } from './game-of-life-controls.component';

describe('GameOfLifeControlsComponent', () => {
  let component: GameOfLifeControlsComponent;
  let fixture: ComponentFixture<GameOfLifeControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOfLifeControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfLifeControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
