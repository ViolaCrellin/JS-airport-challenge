describe("Airport", function() {

  var heathrow;
  var plane;

  beforeEach(function() {
    plane = 'bowing 747';
    heathrow = new Airport();
  });

  it("should have an empty loading bay when created" , function(){
    expect(heathrow.loadingBay).toEqual([]);
  });

  describe("#addToLoadingBay", function(){
    it("adds a plane to the loading bay", function(){
      heathrow.addToLoadingBay(plane);
      expect(heathrow.loadingBay).toContain('bowing 747');
    });

  });

});
