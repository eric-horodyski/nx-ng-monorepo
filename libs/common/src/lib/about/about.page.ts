import { Component, Inject } from '@angular/core';
import { TOKENS } from '../injection/injection.tokens';
import { Tokens } from '../injection/tokens.model';

@Component({
  selector: 'myorg-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
})
export class AboutPage {
  public name = this.tokens.name;

  constructor(@Inject(TOKENS) private tokens: Tokens) {}
}
