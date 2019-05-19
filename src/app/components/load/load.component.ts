import { Component, OnInit, ɵConsole } from '@angular/core';
import { FileItem } from 'src/models/fileItem';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  mouseOver: boolean;
  fileList: FileItem[] = [];

  constructor() {
    this.mouseOver = false;
  }

  ngOnInit() {
  }

  mouseOver1(event) {
    console.log(event);
  }

  loadFile() {
    console.log(this.fileList);
  }

  reset() {
    console.log("click reset");
  }
}
