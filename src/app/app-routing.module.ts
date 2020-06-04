import { from } from 'rxjs';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageLoginComponent} from './pages/page-login/page-login.component';
import {PageSongRankingComponent} from './pages/page-song-ranking/page-song-ranking.component';


const routes: Routes = [
  {path: '', component: PageLoginComponent},
  {path: 'home', component: PageHomeComponent},
  {path: 'song-ranking', component: PageSongRankingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
