import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './action-button/action-button.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';



@NgModule({
  declarations: [
    ActionButtonComponent,
    FileUploaderComponent
  ],
  exports: [
    ActionButtonComponent,
    FileUploaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
