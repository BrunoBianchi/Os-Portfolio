import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-window-tools',
  templateUrl: './window-tools.component.html',
  styleUrl: './window-tools.component.scss'
})
export class WindowToolsComponent {
  @Input() public windowType!: string;
}
