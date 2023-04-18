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
@Directive({ selector: '[parentLifeCycle]' })
export class ParentDirective
  implements
    OnChanges,
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
    console.warn('ngAfterViewChecked() PADRE');
  }

  ngAfterViewInit(): void {
    console.warn('ngAfterViewInit() PADRE');
  }

  ngAfterContentChecked(): void {
    console.warn('ngAfterContentChecked() PADRE');
  }

  ngAfterContentInit(): void {
    console.warn('ngAfterContentInit() PADRE');
  }

  ngDoCheck(): void {
    console.warn('ngDoCheck() PADRE');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn('ngOnChanges() PADRE');
  }

  ngOnInit() {
    console.warn('ngOnInit() PADRE');
  }

  ngOnDestroy() {
    console.warn('ngOnDestroy() PADRE');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
