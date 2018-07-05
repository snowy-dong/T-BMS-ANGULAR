import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-viewEncapsulation-emulated',
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
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationEmulatedComponent {
  name: string = 'ViewEncapsulationEmulated';
}
