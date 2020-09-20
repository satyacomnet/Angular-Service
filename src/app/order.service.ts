import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getOrders() : Observable<any>{
    return this.http.get<any>(this.apiUrl).pipe(
      // tap(data=>{console.log(data)}),
      catchError(this.handleError)
    )
    

  }
  private handleError(error:any){
    console.error(error);
    return throwError(error);

  }
}
