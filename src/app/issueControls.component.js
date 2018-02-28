import template from './issue-controls.html';

class IssueControlsController {
  delete(issueId) {
    this.deleteIssue({
      $event: {
        issueId
      }
    });
  }

  toggle(issueId) {
    this.toggleEdit({
      $event: {
        issueId
      }
    });
  }
}

export const issueControls = {
  bindings: {
    deleteIssue: '&',
    editMode: '<',
    issueId: '<',
    toggleEdit: '&'
  },
  template,
  controller: IssueControlsController
};
