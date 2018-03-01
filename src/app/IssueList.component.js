import template from './issue-list.html';

function flattenArray(array) {
  return [].concat.apply([], array);
}

function filterDuplicateValues(array) {
  return Array.from(new Set(array));
}

function getUniqTags(issues) {
  return filterDuplicateValues(flattenArray(issues.map(issue => issue.tags)));
}
class IssueListController {
  constructor(IssuesService) {
    // 'ngInject';
    this.IssuesService = IssuesService;
    this.selectedTag = '';
  }
  $onInit() {
    this.IssuesService.getAll().$promise.then(issues => {
      this.issues = issues;
      this.allTags = getUniqTags(issues);
      this.filterByTags.bind(this);
    });
  }

  cancelEdit({issueId}) {
    const issue = this.issues.find(issue => {
      return issue.id === issueId;
    });
    issue.backup = null;
    issue.editMode = false;
  }

  deleteIssue({issueId}) {
    this.issues = this.issues.filter(issue => {
      return issue.id !== issueId;
    });
    this.allTags = getUniqTags(this.issues);
  }

  editIssue({issueId}) {
    const issueIndex = this.issues.findIndex(issue => {
      return issue.id === issueId;
    });
    this.issues[issueIndex].backup = null;
    this.issues[issueIndex].backup = angular.copy(this.issues[issueIndex]);
    this.issues[issueIndex].editMode = true;
  }

  filterByTags(issue, selectedTag) {
    if (!selectedTag) {
      return true;
    }
    return issue.tags.indexOf(selectedTag) > -1;
  }

  clearTagFilter() {
    this.selectedTag = '';
  }

  selectFilter(tag) {
    this.selectedTag = tag;
  }

  tagEventHandler({tag}) {
    this.clearTagFilter();
    this.selectFilter(tag);
  }

  updateIssue({issueId}) {
    const issueIndex = this.issues.findIndex(issue => {
      return issue.id === issueId;
    });
    this.issues[issueIndex] = angular.copy(this.issues[issueIndex].backup);
    this.issues[issueIndex].backup = null;
    this.issues[issueIndex].editMode = false;
    this.allTags = getUniqTags(this.issues);
  }
}

export const IssueList = {
  template,
  controller: IssueListController
};
