import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.scss'
})
export class BrowserComponent implements OnChanges {
  @Input() public window!: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['window'] && this.window.expanded) {
      if (changes['window'].currentValue['expanded']) {
        const window = document.getElementById('container');
        window?.classList.add('maximized')
      }
    }
  }
}
