import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// angular material components
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
