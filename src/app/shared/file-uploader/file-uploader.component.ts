import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'file-uploader',
  styles: [
    `
    .file-names-label { display: block; }
    `
  ],
  template: `
    <div class="file-uploader">
      <action-button (click)="fileInput.click()" iconClass="ion-android-upload">
          <ng-content></ng-content>
      </action-button>
      <span class="file-names-label">{{ fileNames }}</span>
      <input type="file" style="display: none" #fileInput (change)="fileInputChanged($event)">
    </div>
  `
})
export class FileUploaderComponent implements OnInit {
  @Output('filesSelected')
  filesSelectedEvent: EventEmitter<FileList> = new EventEmitter<FileList>();

  fileNames = '';

  constructor() { }

  ngOnInit(): void {
  }

  fileInputChanged(event) {
    this.fileNames = Array.from<File>(event.target.files).map(f => f.name).join(', ');

    this.filesSelectedEvent.emit(event.target.files);
  }

}
