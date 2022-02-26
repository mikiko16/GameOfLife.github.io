import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameOfLifeLayoutComponent } from './game-of-life-layout/game-of-life.component';
import { GameOfLifeGridComponent } from './game-of-life-grid/game-of-life-grid.component';
import { GameOfLifeControlsComponent } from './game-of-life-controls/game-of-life-controls.component';
import { GameRoutingModule } from './game-routing.module';
import { GameOfLifeService } from './game.service';



@NgModule({
  declarations: [
    GameOfLifeLayoutComponent, 
    GameOfLifeGridComponent, 
    GameOfLifeControlsComponent],
  imports: [
    GameRoutingModule,
    CommonModule
  ],
  providers: [
    GameOfLifeService
  ]
})
export class GameModule { }
