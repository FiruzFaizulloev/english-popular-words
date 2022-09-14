import { Component, OnInit } from '@angular/core';
import { getWords } from './core/helpers/word-parsing';
import { WordService } from './core/services/word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'english-popular-words';
  showFiller = false;

  constructor(private _wordService: WordService) {
  }

  ngOnInit(): void {
    this._wordService.getAll()
      .subscribe(console.log);
  }
}
