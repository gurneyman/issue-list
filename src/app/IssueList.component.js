import template from './issue-list.html';

class IssueListController {
  constructor(IssuesService) {
    // 'ngInject';
    this.IssuesService = IssuesService;
  }
  $onInit() {
    this.issues = this.IssuesService.getAll();
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
  }

  editIssue({issueId}) {
    const issueIndex = this.issues.findIndex(issue => {
      return issue.id === issueId;
    });
    this.issues[issueIndex].backup = null;
    this.issues[issueIndex].backup = angular.copy(this.issues[issueIndex]);
    this.issues[issueIndex].editMode = true;
  }

  updateIssue({issueId}) {
    const issueIndex = this.issues.findIndex(issue => {
      return issue.id === issueId;
    });
    this.issues[issueIndex] = angular.copy(this.issues[issueIndex].backup);
    this.issues[issueIndex].backup = null;
    this.issues[issueIndex].editMode = false;
  }
}

export const IssueList = {
  template,
  controller: IssueListController
};
