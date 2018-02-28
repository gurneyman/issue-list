import template from './issue-list.html';

class IssueListController {
  constructor(IssuesService) {
    // 'ngInject';
    this.IssuesService = IssuesService;
  }
  $onInit() {
    this.issues = this.IssuesService.getAll();
  }

  deleteIssue({issueId}) {
    this.issues = this.issues.filter(issue => {
      return issue.id !== issueId;
    });
  }

  toggleEdit({issueId}) {
    this.issueId = issueId;
    const issue = this.issues.find(issue => {
      return issue.id === issueId;
    });
    if (issue.editMode) {
      issue.editMode = false;
    } else {
      issue.editMode = true;
    }
  }
}

export const IssueList = {
  replace: true,
  template,
  controller: IssueListController
};
