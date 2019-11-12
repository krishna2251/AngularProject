import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options } from './data';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private http: HttpClient) { }

  getOption(){
    return this.http.get<Options[]>('http://localhost:8080/getOptions').pipe();
  }
}
