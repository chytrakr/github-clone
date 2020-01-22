import { Component, OnInit } from '@angular/core';
import {GithubUsersService} from '../github-users.service';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  page = {
    limit: 10,
    count: 0,
    totalPages: 0,
    offset: 0,
    rows: [],
    selected: [],
    user: ''
  };
  repos = [];
  customClasses = {
    sortAscending: 'fa fa-sort-asc',
    sortDescending: 'fa fa-sort-desc',
    pagerLeftArrow: 'fa fa-chevron-left',
    pagerRightArrow: 'fa fa-chevron-right',
    pagerPrevious: 'fa fa-step-backward',
    pagerNext: 'fa fa-step-forward'
  };
  loading = false;
  loadingRepos = false;
  constructor(private service: GithubUsersService, public ngxSmartModalService: NgxSmartModalService) {
    this.setPage(this.page);
  }

  ngOnInit() {
  }
  setPage(pageInfo) {
    this.page.offset = pageInfo.offset;
    let params = `q=${this.page.user ? 'user:' + this.page.user : ''}+type:User&page=${(pageInfo.offset + 1)}&per_page=${pageInfo.limit}`;
    this.loading = true;
    this.service.fetchTableData(`https://api.github.com/search/users?${params}`).then((resp) => {
      this.loading = false;
      this.page.rows = resp.items;
      this.page.count = resp.total_count > 1000 ? 1000 : resp.total_count; // github providing only the first 1000 search results
    }, (data) => {
      this.loading = false;
      this.page.rows = [];
      this.page.count = 0;
    });
  }

  getRepos(reposApi) {
    this.repos = [];
    this.loadingRepos = true;
    this.service.fetchTableData(reposApi).then((repos) => {
      this.repos = repos;
      this.loadingRepos = false;
    }, err => {
      this.repos = [];
      this.loadingRepos = false;
    });
  }
}
