import { Component } from '@angular/core';

/**
 * Generated class for the JuryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jury',
  templateUrl: 'jury.html'
})
export class JuryComponent {

  text: string;

  constructor() {
    console.log('Hello JuryComponent Component');
    this.text = 'Hello World';
  }

}
