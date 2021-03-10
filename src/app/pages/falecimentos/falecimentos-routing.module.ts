import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FalecimentosPage } from './falecimentos.page';

const routes: Routes = [
  {
    path: '',
    component: FalecimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FalecimentosPageRoutingModule {}
