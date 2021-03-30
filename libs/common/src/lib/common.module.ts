import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { CameraComponent } from './camera/camera.component';
import { TOKENS } from './injection/injection.tokens';
import { Tokens } from './injection/tokens.model';

@NgModule({
  imports: [CommonModule, IonicModule, HttpClientModule],
  declarations: [CameraComponent],
  exports: [CameraComponent],
})
export class MyorgCommonModule {
  static forRoot(config: Tokens): ModuleWithProviders<MyorgCommonModule> {
    return {
      ngModule: MyorgCommonModule,
      providers: [{ provide: TOKENS, useValue: config }],
    };
  }
}
