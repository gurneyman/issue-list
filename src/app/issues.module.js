
import uiRouter from 'angular-ui-router';
import routesConfig from './issues.routes';
import {IssueList} from './IssueList.component';
// import {IssuesService} from './issues.service';

export const IssuesModule = angular
  .module('issues', [
    uiRouter
  ])
  .config(routesConfig)
  // .service('IssuesService', IssuesService)
  .component('view', IssueList)
  .name;

