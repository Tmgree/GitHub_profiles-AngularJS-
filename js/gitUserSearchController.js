githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;
  var access_token = 'd3acfde1071f1c70da3aa8335910c6648a16f78e'
  var searchResource = $resource('https://api.github.com/search/users'+ "?access_token=" + access_token);
  self.searchTerm = 0;

  self.doSearch = function(){
    self.searchResult = searchResource.get(
  { q: self.searchTerm }
);
  };
}]);
