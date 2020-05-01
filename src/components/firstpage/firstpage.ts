import { Component } from '@angular/core';

/**
 * Generated class for the FirstpageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'firstpage',
  templateUrl: 'firstpage.html'
})
export class FirstpageComponent {

  text: string;

  constructor() {
    console.log('Hello FirstpageComponent Component');
    this.text = 'Hello World';
  }

}
