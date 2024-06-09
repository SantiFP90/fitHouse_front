import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, DividerModule, ScrollTopModule, CardModule, CalendarModule, InputTextModule, OverlayPanelModule, CarouselModule],
  exports: [ButtonModule, DividerModule, ScrollTopModule, CardModule, CalendarModule, InputTextModule, OverlayPanelModule, CarouselModule],
})
export class PrimengModule {}
