import template from './issue-controls.html';
import './issue-controls.scss';

class IssueControlsController {
  $onInit() {
    this.event = {
      $event: {
        issueId: this.issueId
      }
    };
  }

  cancel() {
    this.cancelHandler(this.event);
  }

  delete() {
    this.deleteHandler(this.event);
  }

  edit() {
    this.editHandler(this.event);
  }
  save() {
    this.updateHandler(this.event);
  }
}

export const issueControls = {
  bindings: {
    cancelHandler: '&',
    deleteHandler: '&',
    editHandler: '&',
    editMode: '<',
    issueId: '<',
    updateHandler: '&'
  },
  template,
  controller: IssueControlsController
};
