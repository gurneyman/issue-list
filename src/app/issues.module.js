
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routesConfig from './issues.routes';
import {IssueList} from './IssueList.component';
import {issueControls} from './issueControls.component';
import {IssuesService} from './issues.service';

export const IssuesModule = angular
  .module('issues', [
    ngResource,
    uiRouter
  ])
  .config(routesConfig)
  .service('IssuesService', IssuesService)
  .component('view', IssueList)
  .component('issueControls', issueControls)
  .name;

