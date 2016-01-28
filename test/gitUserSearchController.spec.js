describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search term', function() {
    expect(ctrl.searchTerm).toBeDefined();
  });

  describe('when searching for a user', function(){

    var httpBackend;
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .when("GET", "https://api.github.com/search/users?q=hello")
      .respond(
        { items: items }
      );
  }));

    it('displays search results', function() {
      ctrl.searchTerm = "hello";
      ctrl.doSearch();
     expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});
