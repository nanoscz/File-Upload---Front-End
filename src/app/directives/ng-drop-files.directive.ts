import { Directive, EventEmitter, HostListener, Output, Input } from '@angular/core';
import { FileItem } from 'src/models/fileItem';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() fileList: FileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseOver.emit(true);
    this._preventDefaultAndStopPropagation(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    const transfer =  this._getTransfer(event);
    if (!transfer) {
      return;
    }
    this._extractFiles(transfer.files);
    this._preventDefaultAndStopPropagation(event);
    this.mouseOver.emit(false);
  }



  private _getTransfer(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extractFiles(fileList: FileList) {
    for (const prop in Object.getOwnPropertyNames(fileList)) {
      const fileTmp = fileList[prop];
      if (this._fileUpload(fileTmp)) {
        const newFile = new FileItem(fileTmp);
        this.fileList.push(newFile);
      }
    }
    console.log(this.fileList);
  }

  /**
   * Method for validate file
   * @param file;
   * @return boolean;
   */
  private _fileUpload(file) {
    if (!this._fileExisting(file.name) && this._isFileValid(file.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _preventDefaultAndStopPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileExisting( fileName: string): boolean {
    for (const file of this.fileList) {
      if (file.fileName === fileName) {
        console.log(` The file ${fileName} existing...`);
        return true;
      }
    }
    return false;
  }

  private _isFileValid(typeFile): boolean {
    return typeFile === '' || typeFile === undefined ? false : typeFile.startsWith('image');
  }
}
