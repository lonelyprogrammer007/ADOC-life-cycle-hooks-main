import { AfterViewChecked, Component, DoCheck, ViewChild } from '@angular/core';

import { Hero } from './hero';
import { OnChangesComponent } from './on-changes.component';

@Component({
  selector: 'on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styles: [''],
})
export class OnChangesParentComponent {
  hero!: Hero;
  power = '';
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() {
    this.initializeValues();
  }

  reset() {
    this.childView.reset();
    this.initializeValues();
  }

  initializeValues() {
    this.hero = new Hero('Windstorm reset');
    this.power = 'sing reset';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
