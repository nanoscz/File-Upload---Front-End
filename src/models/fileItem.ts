export class FileItem {
  file: File;
  sizeBytes: number;
  fileName: string;
  url: string;
  status: boolean;
  progress: number;
  
  constructor(file:File){
    this.file = file;
    this.fileName = file.name;
    this.sizeBytes = file.size;
    this.status = false;
    this.progress = 50;
  }
}