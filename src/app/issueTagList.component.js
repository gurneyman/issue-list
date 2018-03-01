import template from './issue-tag-list.html';
import './issue-tag-list.scss';

class IssueTagListController {
  remove(tag) {
    this.issue.backup.tags = this.issue.backup.tags.filter(currentTag => {
      return currentTag !== tag;
    });
  }

  add(tag) {
    if (this.issue.backup.tags.indexOf(tag) < 0) {
      this.issue.backup.tags.push(tag);
    }
  }

  chooseFilter(tag) {
    this.filterHandler({
      $event: {
        tag
      }
    });
  }
}

export const issueTagList = {
  bindings: {
    issue: '<',
    filterHandler: '&'
  },
  template,
  controller: IssueTagListController
};
