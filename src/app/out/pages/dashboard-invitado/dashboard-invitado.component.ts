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
}
