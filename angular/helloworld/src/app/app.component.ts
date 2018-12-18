import {Component} from '@angular/core';
@Component({
selector: 'app-root',
template: `
<div style="text-align:center">
  <h1>
    Welcome to claude {{ pageTitle }}!
  </h1>
  <app-products></app-products>
</div>
`
})
export class AppComponent {
  pageTitle = 'Reader Library';
}
