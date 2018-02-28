export class IssuesService {
  constructor($resource) {
    return $resource(
      '../data/issues.json',
      {},
      {
        getAll: {
          method: 'GET',
          isArray: true
        }
      });
  }
}

IssuesService.$inject = ['$resource'];
