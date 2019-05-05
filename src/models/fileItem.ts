export class FileItem {
  file: File;
  nameFile: string;
  url: string;
  status: boolean;
  progress: number;
  
  constructor(file:File){
    this.file = file;
    this.nameFile = file.name;
    this.status = false;
    this.progress = 0;
  }
}