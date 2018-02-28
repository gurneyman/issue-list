import template from './issue-tag-list.html';
import './issue-tag-list.scss';

class IssueTagListController {
}

export const issueTagList = {
  bindings: {
    issue: '<'
  },
  template,
  controller: IssueTagListController
};
