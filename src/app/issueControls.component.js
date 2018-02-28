import template from './issue-controls.html';

class IssueControlsController {
  constructor() {
    this.hi = 'hi';
  }

  $onInit() {
    this.delete = this.issueListCtrl.deleteIssue.bind(this.issueListCtrl);
    this.toggle = this.issueListCtrl.toggleEdit.bind(this.issueListCtrl);
  }
}

IssueControlsController.$inject = [];

export const issueControls = {
  bindings: {
    editMode: '<',
    issueId: '<'
  },
  require: {
    issueListCtrl: '^view'
  },
  template,
  controller: IssueControlsController
};
