import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { CameraComponent } from './camera/camera.component';
import { TOKENS } from './injection/injection.tokens';
import { Tokens } from './injection/tokens.model';
import { AuthInterceptor } from './auth.interceptor';
import { AboutPageModule } from './about/about.module';

@NgModule({
  imports: [CommonModule, IonicModule, HttpClientModule],
  declarations: [CameraComponent],
  exports: [CameraComponent, AboutPageModule],
})
export class MyorgCommonModule {
  static forRoot(config: Tokens): ModuleWithProviders<MyorgCommonModule> {
    return {
      ngModule: MyorgCommonModule,
      providers: [
        { provide: TOKENS, useValue: config },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
    };
  }
}
