import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesGithubComponent } from './repositories-github.component';

describe('RepositoriesGithubComponent', () => {
  let component: RepositoriesGithubComponent;
  let fixture: ComponentFixture<RepositoriesGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoriesGithubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepositoriesGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
