import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsMenuComponent } from './windows-menu.component';

describe('WindowsMenuComponent', () => {
  let component: WindowsMenuComponent;
  let fixture: ComponentFixture<WindowsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowsMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
