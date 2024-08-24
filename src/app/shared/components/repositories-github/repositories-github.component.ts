import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../../services/http-handler-service.service';

@Component({
  selector: 'app-repositories-github',
  templateUrl: './repositories-github.component.html',
  styleUrl: './repositories-github.component.scss'
})
export class RepositoriesGithubComponent implements OnInit {
  constructor(private http: HttpHandlerService) { }

  public repos: any = [];
  async ngOnInit() {
    this.repos = (await this.http.getRepos()).filter((repo: any) => {
      return !repo.name.toLowerCase().includes('capacitacao') && !repo.name.toLowerCase().includes('aprendizado')
    });
    console.log(this.repos)
  }


}
