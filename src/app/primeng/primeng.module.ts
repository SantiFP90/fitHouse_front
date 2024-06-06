import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, DividerModule, ScrollTopModule],
  exports: [ButtonModule, DividerModule, ScrollTopModule],
})
export class PrimengModule {}
