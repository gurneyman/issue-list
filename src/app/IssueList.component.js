import template from './issue-list.html';

class IssueListController {
  constructor($http) {
    // 'ngInject';
    // this.IssuesService = IssuesService;
    this.$http = $http;
  }
  $onInit() {
    // this.newTodo = {
    //   title: '',
    //   selected: false
    // };
    // this.todos = [];
    // this.todoService.getTodos().then(response => this.todos = response);
    // this.IssuesService
    //   .getIssues()
    //   .then(issues => {
    //     this.issues = issues;
    //   });
    this.$http.get('../data/issues.json').then(issues => {
      this.issues = issues;
    });
  }
}

// IssueListController.$inject = ['IssuesService'];
IssueListController.$inject = ['$http'];

export const IssueList = {
  template,
  controller: IssueListController
};
