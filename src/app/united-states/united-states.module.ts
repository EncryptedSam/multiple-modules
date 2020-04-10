import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitedStatesRoutingModule } from './united-states-routing.module';
import { UnitedStatesComponent } from './united-states.component';
import { NewYorkComponent } from './new-york/new-york.component';
import { WashingtonComponent } from './washington/washington.component';


@NgModule({
  declarations: [UnitedStatesComponent, NewYorkComponent, WashingtonComponent],
  imports: [
    CommonModule,
    UnitedStatesRoutingModule
  ],
  exports:[UnitedStatesComponent]
})
export class UnitedStatesModule { }
