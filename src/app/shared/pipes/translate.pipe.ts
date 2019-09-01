import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from 'src/app/shared/services/translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: any): any {
    return this.translate.translateObject[key] || key;
  }
}
