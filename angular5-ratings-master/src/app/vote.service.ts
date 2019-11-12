import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rating } from './model';

@Injectable()
export class VoteService {

  constructor(private http: HttpClient) { }

  saveEntry(ratings): Observable<Rating> {
    const httpOptions = {
      headers:new HttpHeaders({
     'Content-Type' : 'application/json',
     'Accept' : 'application/json',
     'responseType':'text',
     'Access-Control-Allow-Origin':'http://localhost:8091',
     'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
     'Access-Control-Allow-Headers':'Content-Type:application/json',
     'Authorization':'my-auth-token'
      })  
    };
    return this.http.post<Rating>('http://localhost:8080/add', ratings, httpOptions);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/getAll');
  }

}
