import { Component, OnInit } from '@angular/core';
import { WordService } from '../../core/services/word.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss']
})
export class NewWordComponent implements OnInit {

  word: any;
  wordIndex = 0;
  words: any[] = [];

  constructor(
    private _wordService: WordService
  ) { }

  ngOnInit(): void {
    this._wordService.getAll()
      .pipe(first())
      .subscribe((res: any) => {
        this.words = res;
        this.wordIndex = +(localStorage.getItem('wordIndex') || '0');
        this._getWord();
      });
  }

  private _getWord(): void {
    this.word = this.words[this.wordIndex];
  }

  prev() {
    this.wordIndex--;
    localStorage.setItem('wordIndex', this.wordIndex.toString());
    this._getWord();
  }

  next() {
    this.wordIndex++;
    localStorage.setItem('wordIndex', this.wordIndex.toString());
    this._getWord();
  }
}
