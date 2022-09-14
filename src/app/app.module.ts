import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NewWordComponent } from './pages/new-word/new-word.component';
import { QuizComponent } from './quiz/quiz.component';
import { Route, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Route[] = [
  {
    path: '',
    component: NewWordComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewWordComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
