
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routesConfig from './issues.routes';

import {IssuesService} from './issues.service';

import {IssueList} from './IssueList.component';
import {issueControls} from './issueControls.component';
import {issueEdit} from './issueEdit.component';
import {issuePreview} from './issuePreview.component';
import {issueTagList} from './issueTagList.component';

export const IssuesModule = angular
  .module('issues', [
    ngResource,
    uiRouter
  ])
  .config(routesConfig)
  .service('IssuesService', IssuesService)
  .component('view', IssueList)
  .component('issueControls', issueControls)
  .component('issueEdit', issueEdit)
  .component('issuePreview', issuePreview)
  .component('issueTagList', issueTagList)
  .name;

