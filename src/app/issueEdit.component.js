import template from './issue-edit.html';
import './issue-edit.scss';

class IssueEditController {
}

export const issueEdit = {
  bindings: {
    issue: '<'
  },
  template,
  controller: IssueEditController
};
