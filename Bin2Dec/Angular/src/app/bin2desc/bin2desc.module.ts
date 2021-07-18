import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bin2descComponent } from './bin2desc.component';
import { FormsModule } from '@angular/forms';
import { MessageModule } from '../components/message/message.module';

@NgModule({
  declarations: [Bin2descComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessageModule
  ],
  exports: [
    Bin2descComponent
  ]
})
export class Bin2descModule { }
