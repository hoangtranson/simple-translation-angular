import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranslateService {

  translateObject: any = {};

  constructor(private http: HttpClient) {}
  
  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/locales/${lang || 'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.translateObject = Object.assign({}, translation || {});
          resolve(this.translateObject);
        },
        error => {
          this.translateObject = {};
          resolve(this.translateObject);
        }
      );
    });
  }
}
