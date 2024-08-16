import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { WindowsMenuComponent } from './shared/components/windows-menu/windows-menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserComponent } from './shared/components/browser/browser.component';
import { WindowToolsComponent } from './shared/components/window-tools/window-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WindowsMenuComponent,
    BrowserComponent,
    WindowToolsComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
