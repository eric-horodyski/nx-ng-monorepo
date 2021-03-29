import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CameraComponent } from './camera/camera.component';

@NgModule({
  imports: [CommonModule, IonicModule.forRoot()],
  declarations: [CameraComponent],
  exports: [CameraComponent],
})
export class MyorgCommonModule {}
