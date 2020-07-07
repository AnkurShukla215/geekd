import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './widgets/pie/pie.component';
import { MatTooltipModule} from '@angular/material/tooltip';

// import {FlexLayoutModule} from '@angular/flex-layout';
// import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    // FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    HighchartsChartModule,
    MatTooltipModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent
    // MatDividerModule,
    // MatButtonModule,
    // // FlexLayoutModule,
    // MatToolbarModule,
    // MatIconModule
  ]
})
export class SharedModule { }
