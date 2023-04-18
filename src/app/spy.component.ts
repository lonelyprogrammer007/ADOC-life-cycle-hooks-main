import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'spy-parent',
  templateUrl: './spy.component.html',
  providers: [LoggerService],
})
export class SpyParentComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) {}

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
  }
  reset() {
    this.logger.log('reset');
    this.heroes = [];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
