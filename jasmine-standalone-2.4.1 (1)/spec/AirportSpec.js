describe("Airport", function() {

  var heathrow;

  beforeEach(function() {
    heathrow = new Airport();
  });

  it("should have an empty loading bay when created" , function(){
    expect(heathrow.loading_bay).toEqual([]);
  });

  describe("#land", function() {

    it("should be able to land a plane", function(){
      heathrow.land('plane');
      expect(heathrow.loading_bay).toEqual(['plane']);
    });
  });
});
