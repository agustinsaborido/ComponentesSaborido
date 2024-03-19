import { Component } from '@angular/core';

@Component({
  selector: 'app-example3',
  template: `
  <h1>componente example3</h1>
    <p>
      example3 works!
    </p>
  `,
  styles: `
  p{
    font-weigh:800;
  }
  `,
})
export class Example3Component {
  edad = 33;
}
