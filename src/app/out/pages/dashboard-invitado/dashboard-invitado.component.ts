import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard-invitado',
  templateUrl: './dashboard-invitado.component.html',
  styleUrls: ['./dashboard-invitado.component.scss']
})
export class DashboardInvitadoComponent {
  public date: Date | undefined;
  public classSearch: string | undefined;
  classes: any[];
  responsiveOptions: any[];

  searchTerm: string = '';
  selectedDate: string | null = null;
  selectedIntensity: string | null = null;

  options = [{label: 'Todas las fechas', value: null}, {label: 'Fecha 1', value: 'fecha1'}, {label: 'Fecha 2', value: 'fecha2'}]
  optionsIntensity = [{label: 'Todas las intensidades', value: null}, {label: 'Baja', value: 'baja'}, {label: 'Media', value: 'media'}, {label: 'Alta', value: 'alta'}]

  constructor() {
    this.classes = [
      { name: 'Nombre de la clase 1', image: '../../../../assets/class.webp', intensity: 'Fuerte', date: '22-03-2029' },
      { name: 'Nombre de la clase 2', image: '../../../../assets/class.webp', intensity: 'Fuerte', date: '22-03-2029' },
      { name: 'Nombre de la clase 3', image: '../../../../assets/class.webp', intensity: 'Fuerte', date: '22-03-2029' },
      { name: 'Nombre de la clase 4', image: '../../../../assets/class.webp', intensity: 'Fuerte', date: '22-03-2029' },
      { name: 'Nombre de la clase 5', image: '../../../../assets/class.webp', intensity: 'Fuerte', date: '22-03-2029' }
    ];
  this.responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  }

  onSearch(): void {
    // Implementar la lógica de búsqueda
    console.log('Search term:', this.searchTerm);
    console.log('Selected date:', this.selectedDate);
    console.log('Selected intensity:', this.selectedIntensity);
  }
}
