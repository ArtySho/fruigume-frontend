import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) { }

  private cartUrl = 'localhost:8080/cart';


  validateCart(id): Observable<any> {
    return this.http.get('localhost:8080/cart/validate/' + id);
  }


}
