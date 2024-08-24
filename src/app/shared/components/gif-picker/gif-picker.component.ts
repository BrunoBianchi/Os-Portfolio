import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpHandlerService } from '../../services/http-handler-service.service';

@Component({
  selector: 'app-gif-picker',
  templateUrl: './gif-picker.component.html',
  styleUrl: './gif-picker.component.scss'
})
export class GifPickerComponent {
  constructor(private http: HttpHandlerService) { }
  public gifs: any = [];
  @Input() public enable: boolean = false;
  @Output() public choosenGif: EventEmitter<string> = new EventEmitter();

  public searchTxt: string = '';
  public timeout!: any;

  triggerSearch(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      this.gifs = (await this.http.searchGif(event.target.value) as any).results;
    }, 300);
  }

  upLoadGif(url: string) {
    this.choosenGif.emit(url);
  }
}
