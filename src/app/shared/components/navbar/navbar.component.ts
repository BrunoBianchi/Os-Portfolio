import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() public nav_list: Array<any> = [];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(this.nav_list, event.previousIndex, event.currentIndex);
  }
}
