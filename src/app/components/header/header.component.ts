import { MaterialComponentsModule } from '@modules/material-components/material-components.module';
import { Component } from '@angular/core';

@Component({
  selector: 'taskly-header',
  imports: [MaterialComponentsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  title: string = 'taskly';
}
