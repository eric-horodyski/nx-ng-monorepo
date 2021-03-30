import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyorgCommonModule, TOKENS } from '@myorg/common';

import { UsersPage } from './users.page';
import { UsersRoutingModule } from './users-routing.module';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    MyorgCommonModule,
  ],
  declarations: [UsersPage],
  providers: [
    {
      provide: TOKENS,
      useValue: {
        name: environment.name,
        api: environment.api,
      },
    },
  ],
})
export class UsersPageModule {}
