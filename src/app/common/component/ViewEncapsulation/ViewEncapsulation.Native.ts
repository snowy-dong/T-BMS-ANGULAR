import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'my-viewEncapsulation-native',
  template: `
    <h4>Welcome to Angular World</h4>
    <p class="greet">Hello {{name}}</p>
  `,
  styles: [`
    .greet {
      background: #369;
      color: white;
    }
  `],
  encapsulation: ViewEncapsulation.Native // None | Emulated | Native
})
export class ViewEncapsulationNativeComponent {
  name: string = 'ViewEncapsulationNative';
}
