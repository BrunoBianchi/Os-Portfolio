import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowToolsComponent } from './window-tools.component';

describe('WindowToolsComponent', () => {
  let component: WindowToolsComponent;
  let fixture: ComponentFixture<WindowToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
