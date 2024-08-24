import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  public name: string = localStorage.getItem('chatUsername') || "";
  public gifPicker: boolean = false;
  public messages: Array<{ name: string, message: string }> = [{
    message: `<span>Remember to always be polite and follow the rules: <br> </span>
    <ul> 
    <li> No Trash Talk</li>
    <li> No Racism</li>
     <li>Just chill and have fun :)</li>
    </ul>`,
    name: 'Server'
  }];
  public reactiveChatLogin: FormGroup = new FormGroup({
    name: new FormControl(''),
  })

  public reactiveChat: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  })


  public joinChat() {
    this.name = this.reactiveChatLogin.value.name;
    localStorage.setItem('chatUsername', this.name);
  }

  public onChoosenGif(event: any) {
    this.messages.push({
      name: this.name,
      message: `<img src='${event}' width='100px' height='80px'>`
    });
  }

  public sendMessage() {
    this.messages.push({
      name: this.name,
      message: this.reactiveChat.value.message
    });
    this.reactiveChat.reset();
  }

  public toggleGifPicker() {
    if (this.gifPicker) {
      this.gifPicker = false;
    } else {
      this.gifPicker = true;
    }

  }


}
