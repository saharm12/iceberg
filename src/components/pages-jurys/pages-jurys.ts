import { Component } from '@angular/core';

/**
 * Generated class for the PagesJurysComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pages-jurys',
  templateUrl: 'pages-jurys.html'
})
export class PagesJurysComponent {

  text: string;

  constructor() {
    console.log('Hello PagesJurysComponent Component');
    this.text = 'Hello World';
  }

}
