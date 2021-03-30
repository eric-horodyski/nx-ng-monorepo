import { InjectionToken } from '@angular/core';
import { Tokens } from './tokens.model';

export const TOKENS = new InjectionToken<Tokens>('tokens', {
  providedIn: 'root',
  factory: () => ({
    name: 'MyOrg Test App',
    api: 'https://randomuser.me/api/?results=5',
  }),
});
