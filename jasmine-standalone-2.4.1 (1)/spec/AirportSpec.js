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

  describe("#removeFromLoadingBay", function(){
    it("removes the plane from the loading bay", function(){
      heathrow.addToLoadingBay(plane);
      heathrow.removeFromLoadingBay(plane);
      expect(heathrow.loadingBay).toEqual([]);
    });

    it("will raise an error if no planes are in loading bay to remove from it", function(){
      expect(function(){heathrow.removeFromLoadingBay(plane);}).toThrow("No planes available");
    });

    it("will not return a plane if there are no planes in the loading bay", function(){
      expect(function(){heathrow.removeFromLoadingBay(plane);}).not.toEqual(plane);
    });


  });
});
