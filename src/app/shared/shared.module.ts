import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SpinnerComponent],
  imports: [CommonModule, PrimengModule],
  exports: [HeaderComponent, FooterComponent, SpinnerComponent],
})
export class SharedModule {}
