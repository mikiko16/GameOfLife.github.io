import { Component, OnInit } from '@angular/core';
import { GameOfLifeService } from '../game.service';

@Component({
  selector: 'app-game-of-life-controls',
  templateUrl: './game-of-life-controls.component.html',
  styleUrls: ['./game-of-life-controls.component.css']
})
export class GameOfLifeControlsComponent implements OnInit {

  constructor(private gameOfLifeService: GameOfLifeService) { }

  private intervalId: number;
  private _isRunning: boolean;

  get isRunning() {
    return this._isRunning;
  }

  ngOnInit() {
    this.start();
  }

  start() {
    this.intervalId = window.setInterval(() => {
      this.gameOfLifeService.nextGeneration();
    }, 100);
    this._isRunning = true;
  }

  stop() {
    window.clearInterval(this.intervalId);
    this._isRunning = false;
  }

  getGenerationCount() {
    return this.gameOfLifeService.generationCount;
  }

  reset() {
    this.stop();
    this.gameOfLifeService.reset();

    this.gameOfLifeService.randomizeCellStates() // This function call is added in order to fix the Reset button bug
  }
}
