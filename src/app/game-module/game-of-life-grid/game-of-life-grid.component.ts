import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/Cell';
import { GameOfLifeService } from '../game.service';

@Component({
  selector: 'app-game-of-life-grid',
  templateUrl: './game-of-life-grid.component.html',
  styleUrls: ['./game-of-life-grid.component.css']
})
export class GameOfLifeGridComponent implements OnInit {

  constructor(private gameOfLifeService: GameOfLifeService) { }

  @Input() rows: number;
  @Input() cols: number;
  grid: Cell[][];

  ngOnInit() {
    this.grid = this.gameOfLifeService.getGrid();
  }

  toggleState(cell: Cell) {
    cell.toggleState();
  }
}
