import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCartPageRoutingModule } from './my-annonce-routing.module';

import { MyCartPage } from './my-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCartPageRoutingModule
  ],
  declarations: [MyCartPage]
})
export class MyCartPageModule {}
