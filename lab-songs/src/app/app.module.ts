import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {environment} from '../environments/environment'
import {AngularFireModule} from '@angular/fire'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {ReactiveFormsModule} from '@angular/forms'
import {AngularFireAuthModule } from '@angular/fire/auth';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SongRankingComponent } from './components/song-ranking/song-ranking.component';
import { PageSongRankingComponent } from './pages/page-song-ranking/page-song-ranking.component';
// import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageLoginComponent,
    HomeComponent,
    PageHomeComponent,
    SongRankingComponent,
    PageSongRankingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    ReactiveFormsModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    // MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
