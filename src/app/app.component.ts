import { Component } from '@angular/core';
import { CorpoComponent } from './corpo/corpo.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-whatapp';
  constructor() {
    const ok = new CorpoComponent();
    ok.plataforma();
  }
}
