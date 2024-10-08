import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public apps_desktop = [
    { name: 'Browser', position: { x: 0, y: 0 }, windowOpen: false, url: 'https://win98icons.alexmeub.com/icons/png/msie1-2.png', expanded: false, 'z-index': 0 },
    { name: 'Projects', position: { x: 100, y: 0 }, windowOpen: false, url: 'https://win98icons.alexmeub.com/icons/png/directory_closed-4.png', expanded: false, 'z-index': 0 },
    { name: 'CV', position: { x: 0, y: 100 }, windowOpen: false, url: 'https://win98icons.alexmeub.com/icons/png/write_wordpad-1.png', expanded: false, 'z-index': 0 },
    { name: 'Chat', position: { x: 1000, y: 100 }, windowOpen: false, url: 'https://win98icons.alexmeub.com/icons/png/msn.png', expanded: false, 'z-index': 0 },
    { name: 'Terminal', position: { x: 1000, y: 200 }, windowOpen: false, url: 'https://win98icons.alexmeub.com/icons/png/console_prompt-0.png', expanded: false, 'z-index': 0 },
    { name: 'Minesweeper', position: { x: 1000, y: 300 }, windowOpen: false, url: '../../../../assets/mine.png', expanded: false, 'z-index': 0 }


  ];

  public openWindows: Array<any> = [];

  onDragEnd(event: CdkDragEnd, app: any) {
    const gridSize = 100;
    const containerRect = event.source.element.nativeElement.parentElement!.getBoundingClientRect();
    const iconWidth = 100;
    const iconHeight = 100;

    let x = Math.round(event.source.getFreeDragPosition().x / gridSize) * gridSize;
    let y = Math.round(event.source.getFreeDragPosition().y / gridSize) * gridSize;

    // Restringir a posição dentro dos limites visíveis
    x = Math.max(0, Math.min(x, containerRect.width - iconWidth));
    y = Math.max(0, Math.min(y, containerRect.height - iconHeight));

    app.position = { x, y };
  }

  openWindow(app: any) {
    if (!app.windowOpen) {
      this.openWindows.push({
        name: app.name,
        position: { x: 100, y: 100 }, // Posição inicial da janela
        url: app.url,
        expanded: app.expanded,
        "z-index": 9999
      });
      app.windowOpen = true;
      if (this.openWindows.length >= 2 && this.openWindows.find((w) => w['z-index'] == 9999)) {
        const previousWindowWithZindex = this.openWindows[this.openWindows.findIndex((window: any) => window['z-index'] == 9999)];
        this.openWindows[this.openWindows.findIndex((window: any) => window['z-index'] == 9999)]['z-index'] = 0;
        this.openWindows = this.openWindows.map(window => ({ ...window }));
        const previousWindowWithZindexComponent = document.getElementById(`window-${previousWindowWithZindex.name.trim()}`);
        if (previousWindowWithZindexComponent) {
          previousWindowWithZindexComponent.style.zIndex = '0';
        }
      }
      const window_comp = document.getElementById(`window-${app.name.trim()}`);
      if (window_comp) {
        window_comp!.style.zIndex = '9999';
        app['z-index'] = 9999;
      }
      console.log(this.openWindows)
    }
  }

  maximizeWindow(app: any) {
    const window_comp = document.getElementById(`window-${app.name.trim()}`);

    if (window_comp) {
      // Definindo a largura e altura para ocupar 100% da área disponível
      window_comp.style.width = '100%';
      window_comp.style.height = '100%';

      // Centralizando a janela dentro do app
      window_comp.style.position = 'absolute';
      window_comp.style.top = '0';
      window_comp.style.left = '0';
      window_comp.style.transform = 'none'; // Remover qualquer transformação anterior que possa estar aplicada
    }
    this.openWindows[this.openWindows.findIndex((window: any) => window.name === app.name)].expanded = true;
    this.openWindows = this.openWindows.map(window => ({ ...window }));

  }

  minimizeWindow(app: any) {
    const window_comp = document.getElementById(`window-${app.name.trim()}`);

    if (window_comp) {

      window_comp.style.display = 'none'; // Remover qualquer transformação anterior que possa estar aplicada
    }
    this.openWindows[this.openWindows.findIndex((window: any) => window.name === app.name)].expanded = false;
    this.openWindows = this.openWindows.map(window => ({ ...window }));

  }


  closeWindow(window: any) {
    this.openWindows = this.openWindows.filter(w => w !== window);
    const app = this.apps_desktop.find((a: any) => a.name === window.name);
    if (app) {
      app.windowOpen = false;
      app.expanded = false;
    }
  }

  toggleWindow(navName: string) {
    const window_comp = document.getElementById(`window-${navName.trim()}`);
    if (window_comp) {
      if (window_comp.style.display != 'none') {
        window_comp.style.display = 'none';
      } else {
        window_comp.style.display = 'initial'; // Remover qualquer transformação anterior que possa estar aplicada

      }
    }
  }

  changeZIndex(windowName: string) {
    if (this.openWindows.length >= 2 && this.openWindows.find((w) => w['z-index'] == 9999)) {
      const previousWindowWithZindex = this.openWindows[this.openWindows.findIndex((window: any) => window['z-index'] == 9999)];
      this.openWindows[this.openWindows.findIndex((window: any) => window['z-index'] == 9999)]['z-index'] = 0;
      this.openWindows = this.openWindows.map(window => ({ ...window }));
      const previousWindowWithZindexComponent = document.getElementById(`window-${previousWindowWithZindex.name.trim()}`);
      if (previousWindowWithZindexComponent) {
        previousWindowWithZindexComponent.style.zIndex = '0';
      }
    }
    const window_comp = document.getElementById(`window-${windowName.trim()}`);
    if (window_comp) {
      window_comp!.style.zIndex = '9999';
      this.openWindows[this.openWindows.findIndex((window: any) => window.name == windowName)]['z-index'] = 9999;
    }
  }
}
