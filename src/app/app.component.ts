import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from './shared/services/translate.service';
import { fromEvent, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('language', {static: true}) language$: ElementRef;
  unsubscribe$ = new Subject();

  constructor(private translate: TranslateService){
    this.translate.use('en');
  }

  ngOnInit() {
    fromEvent(this.language$.nativeElement, 'change').pipe( 
      map( (event:Event) => event.target['value']),
      takeUntil(this.unsubscribe$)
    ).subscribe( lang => {
      this.translate.use(lang);
    })
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
