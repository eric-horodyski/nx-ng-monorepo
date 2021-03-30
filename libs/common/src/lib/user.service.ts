import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { TOKENS } from './injection/injection.tokens';
import { Tokens } from './injection/tokens.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    @Inject(TOKENS) private tokens: Tokens,
    private http: HttpClient
  ) {}

  getUsers(): Observable<any[]> {
    return this.http.get(this.tokens.api).pipe(
      pluck('results'),
      map((items: []) =>
        items.map((item: any) => ({
          name: item.name,
          picture: item.picture.thumbnail,
          uuid: item.login.uuid,
        }))
      )
    );
  }
}
