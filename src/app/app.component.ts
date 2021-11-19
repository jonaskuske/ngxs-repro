import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{ name$ | async }}</h1>`,
})
export class AppComponent implements OnInit {
  @Select(AppState.appName) name$: Observable<string>;

  constructor() {
    this.name$.subscribe((name) => console.log(name)); // throws error
  }

  ngOnInit() {
    this.name$.subscribe((name) => console.log(name)); // works
  }
}
