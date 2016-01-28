githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');
  self.searchTerm = 0;

  self.doSearch = function(){
    self.searchResult = searchResource.get(

  { access_token: access_token,
    q: self.searchTerm }
);
  };
}]);
