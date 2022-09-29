import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, retry, tap } from 'rxjs';

const URL = 'api/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private client: HttpClient) {}

  public getOk(): Observable<string> {
    return this.client.get(URL, { responseType: 'text' }).pipe(
      tap((r) => console.log('retrying')),
      retry({ count: 5, delay: 1000 }),
      catchError((err) => {
        console.log(JSON.stringify(err));
        return of('error occured');
      }),
      map((r) => r.toString())
    );
  }
}
