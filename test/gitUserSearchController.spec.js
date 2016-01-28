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
        .when("GET", "https://api.github.com/search/users?access_token=d3acfde1071f1c70da3aa8335910c6648a16f78e&q=hello")
        .respond(
          { items: items }
        );
    }));

    var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      },
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];


    it('displays search results', function() {
      ctrl.searchTerm = "hello";
      ctrl.doSearch();
      httpBackend.flush();
     expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});
