import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this._http.get<any[]>('./assets/data.json');
  }
}
