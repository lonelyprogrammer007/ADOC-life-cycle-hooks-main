import {
  Directive,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
} from '@angular/core';

// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({ selector: '[childLifeCycle]' })
export class ChildDirective
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {}

  ngAfterViewChecked(): void {
    console.warn('ngAfterViewChecked() HIJO');
  }

  ngAfterViewInit(): void {
    console.warn('ngAfterViewInit() HIJO');
  }

  ngAfterContentChecked(): void {
    console.warn('ngAfterContentChecked() HIJO');
  }

  ngAfterContentInit(): void {
    console.warn('ngAfterContentInit() HIJO');
  }

  ngDoCheck(): void {
    console.warn('ngDoCheck() HIJO');
  }

  ngOnInit() {
    console.warn('ngOnInit() HIJO');
  }

  ngOnDestroy() {
    console.warn('ngOnDestroy() HIJO');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
