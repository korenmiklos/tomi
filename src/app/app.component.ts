import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  words = [];

  generate() {
    
    function* autoText(){
      let fn1 = 1;
      let fn2 = 1;
      while (1) {
        let current = fn2;
        fn2 = fn1;
        fn1 = fn1 + current;
        yield ''+current;
      }
    }

    this.words = ['Fibonacci:'];
    const autoTextGenerator = autoText();

    Observable.interval(50)
      .take(60)
      .map(() => autoTextGenerator.next().value)
      .subscribe(word => this.words.push(word));
  }
}
