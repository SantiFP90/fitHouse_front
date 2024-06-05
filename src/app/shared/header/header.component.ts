import { Component, OnInit } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public miraalud: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.miralud();
    }, 3000);
    this.close();
  }

  miralud() {
    this.miraalud = false;
  }

  close() {
    let component = document.getElementById('loader');
    console.log(component);

    // component?.classList.remove('fadein');
    component?.classList.add('fadeout');
    component?.classList.add('animation-duration-2000');
    setTimeout(() => {
      this.miraalud = true;
    }, 1900);
  }
}
