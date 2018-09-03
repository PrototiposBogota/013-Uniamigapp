import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowProjectPage } from './show-project';

@NgModule({
  declarations: [
    ShowProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowProjectPage),
  ],
})
export class ShowProjectPageModule {}
