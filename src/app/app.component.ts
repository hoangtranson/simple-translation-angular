import { Component } from '@angular/core';
import { TranslateService } from './shared/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService){
    this.translate.use('en');
  }
}
