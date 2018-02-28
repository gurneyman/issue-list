import template from './issue-preview.html';
import './issue-preview.scss';

class IssuePreviewController {
}

export const issuePreview = {
  bindings: {
    issue: '<'
  },
  template,
  controller: IssuePreviewController
};
