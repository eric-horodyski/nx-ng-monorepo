import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersPage } from './users.page';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UsersRoutingModule],
  declarations: [UsersPage],
})
export class UsersPageModule {}
