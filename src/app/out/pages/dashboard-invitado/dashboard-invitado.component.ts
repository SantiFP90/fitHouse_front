import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-invitado',
  templateUrl: './dashboard-invitado.component.html',
  styleUrls: ['./dashboard-invitado.component.scss'],
})
export class DashboardInvitadoComponent {
  public date: Date | undefined;
  public classSearch: string | undefined;

  selectedIntensity: string | null = null;

  optionsIntensity = [
    { label: 'Todas las intensidades', value: null },
    { label: 'Baja', value: 'baja' },
    { label: 'Media', value: 'media' },
    { label: 'Alta', value: 'alta' },
  ];

  onSearch(): void {
    // Implementar la lógica de búsqueda
  }
}
