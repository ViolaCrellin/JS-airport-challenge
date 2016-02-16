describe("Airport", function() {

  var heathrow;

  beforeEach(function() {
    heathrow = new Airport();
  });

  it("should have an empty loading bay when created" , function(){
    var a = heathrow.loading_bay
    expect(a).toEqual([]);
  });


});
