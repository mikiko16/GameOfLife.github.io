import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameOfLifeLayoutComponent } from './game-of-life-layout/game-of-life.component';


const routes: Routes = [
  { path: '', component: GameOfLifeLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }