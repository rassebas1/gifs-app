import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseGiphy, Gif } from '../../shared/interfaces/giphy.interfaces';

const API_KEY = 'MEnkT4OkL47UxEsrdqlaXB9clW5mYukE';
const BASE_URL = 'https://api.giphy.com/v1/gifs';
const LIMIT = 15;
const TRENDING = '/trending';
const SEARCH = '/search';

@Injectable({ providedIn: 'root' })
export class GiphyService {
  private _tagsHistory: string[] = [];
  private _gifData: Gif[] = [];
  private _offset: number = 0;

  /**
   *constructor del servicio
   */
  constructor(private httpClient: HttpClient) {
    this.loadSessionStorage();
  }

  get offset(): number {
    return this._offset;
  }
  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }
  get gifData(): Gif[] {
    return [...this._gifData];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this.safeSessionStorage();
  }

  public addSearchTag(tag: string): void {
    if (tag === '') return;
    if (this._tagsHistory.length === 10) {
      this.organizeHistory(tag);
      this._tagsHistory.pop();
    } else {
      this.organizeHistory(tag);
      //this._tagsHistory.unshift(tag);
    }
    const params = new HttpParams()
      .set('api_key', API_KEY)
      .set('q', tag)
      .set('limit', LIMIT)
      .set('offset', this.offset);

    this.httpClient
      .get<ResponseGiphy>(BASE_URL + SEARCH, { params: params })
      .subscribe((resp) => {
        console.log(resp);
        this._gifData = resp.data;
      });
  }

  private safeSessionStorage(): void {
    sessionStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }
  private loadSessionStorage(): void {
    console.log(this._tagsHistory,sessionStorage.getItem('history') );
    if (!sessionStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(sessionStorage.getItem('history')!);

    if (this._tagsHistory.length===0)return
    this.addSearchTag(this._tagsHistory[0])
  }
}
