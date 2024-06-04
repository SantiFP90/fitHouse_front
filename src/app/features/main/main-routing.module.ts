import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInvitadoComponent } from './pages/dashboard-invitado/dashboard-invitado.component';

const routes: Routes = [
  { path: 'invitedDashboard', component: DashboardInvitadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
