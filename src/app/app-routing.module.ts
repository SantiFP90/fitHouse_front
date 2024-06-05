import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'in',
    loadChildren: () => import('./out/out.module').then((m) => m.MainModule),
  },
  { path: '**', redirectTo: 'in/invitedDashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
