import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TranslatePipe
  ],
  providers: [
    TranslateService
  ],
})
export class SharedModule { }
