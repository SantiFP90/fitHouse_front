import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard-invitado',
  templateUrl: './dashboard-invitado.component.html',
  styleUrls: ['./dashboard-invitado.component.scss']
})
export class DashboardInvitadoComponent {
  public date: Date | undefined;
  public classSearch: string | undefined;
}
