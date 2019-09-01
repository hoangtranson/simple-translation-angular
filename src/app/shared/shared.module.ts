import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';



@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TranslateService
  ],
})
export class SharedModule { }
