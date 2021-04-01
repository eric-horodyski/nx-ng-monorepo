import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Tokens } from './injection/tokens.model';
import { TOKENS } from './injection/injection.tokens';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private namespace = this.tokens.name.toLowerCase().replace(' ', '_');

  get token() {
    if (!localStorage.getItem(this.namespace))
      localStorage.setItem(this.namespace, 'a332be23861');
    return localStorage.getItem(this.namespace);
  }
  constructor(@Inject(TOKENS) private tokens: Tokens) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return next.handle(request);
  }
}
