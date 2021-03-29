import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyorgCommonModule } from '@myorg/common';

import { GalleryPage } from './gallery.page';

import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GalleryRoutingModule,
    MyorgCommonModule,
  ],
  declarations: [GalleryPage],
})
export class GalleryPageModule {}
