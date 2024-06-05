import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './out-routing.module';
import { DashboardInvitadoComponent } from './pages/dashboard-invitado/dashboard-invitado.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [DashboardInvitadoComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, PrimengModule],
})
export class MainModule {}
