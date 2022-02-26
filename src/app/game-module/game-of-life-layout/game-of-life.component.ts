import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/constants';
import { GameOfLifeService } from '../game.service';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css']
})
export class GameOfLifeLayoutComponent implements OnInit {

  constructor(private gameOfLifeService: GameOfLifeService) {}

  rows: number = APP_CONSTANTS.rows;
  cols: number = APP_CONSTANTS.cols;
  hover: boolean = true;

  ngOnInit(): void {
    this.gameOfLifeService.initialize(this.rows, this.cols);
    this.gameOfLifeService.randomizeCellStates();
  }

  play(){
    if(this.hover){
      this.gameOfLifeService.playAudio();
      this.hover = false;
    }
  }
}
