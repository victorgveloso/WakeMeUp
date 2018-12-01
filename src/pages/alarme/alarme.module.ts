import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlarmePage } from './alarme';

@NgModule({
  declarations: [
    AlarmePage,
  ],
  imports: [
    IonicPageModule.forChild(AlarmePage),
  ],
})
export class AlarmePageModule {}
