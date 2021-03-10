import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FalecimentosPageRoutingModule } from './falecimentos-routing.module';

import { FalecimentosPage } from './falecimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FalecimentosPageRoutingModule
  ],
  declarations: [FalecimentosPage]
})
export class FalecimentosPageModule {}
