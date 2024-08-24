import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http: HttpClient) { }

  public async searchGif(name: string) {
    return firstValueFrom(await this.http.get(`https://g.tenor.com/v1/search?q=${name}&key=LIVDSRZULELA&limit=27`));
  }

  public async getRepos() {
    return firstValueFrom(await this.http.get<[]>("https://api.github.com/users/BrunoBianchi/repos"));

  }
}
