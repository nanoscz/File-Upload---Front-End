import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photo/photo.component';
import { LoadComponent } from './components/load/load.component';
import { UploadService } from './core/upload.service';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    LoadComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
