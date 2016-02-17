describe ("Plane", function (){

  var plane;
  var heathrow;

  beforeEach(function(){
    plane = new Plane();
    heathrow = jasmine.createSpyObj('heathrow', ['addToLoadingBay', 'removeFromLoadingBay']);
  });

  describe("#status", function(){
    it ("has a deafult status of flying", function(){
      expect(plane.status).toEqual('flying');
    });
  });

  describe("#land", function(){
    it("changes the planes status to landed", function(){
      plane.land(heathrow);
      expect(plane.status).toEqual('landed');
    });

    it("instructs airport to add plane to loading bay", function(){
      plane.land(heathrow);
      expect(heathrow.addToLoadingBay).toHaveBeenCalledWith(plane);
    });

    it("plane cannot land if a plane is already landed", function(){
      plane.land(heathrow);
      expect(function(){plane.land(heathrow);}).toThrow("Plane is not flying, so cannot land");
    });
  });

  describe("#takeOff", function(){

    beforeEach (function(){
      plane.land(heathrow);
      plane.takeOff(heathrow);
    });

    it("changes plane's status to flying", function(){
      expect(plane.status).toEqual('flying');
    });

    it("instructs airport to add plane to loadin bay", function(){
      expect(heathrow.removeFromLoadingBay).toHaveBeenCalledWith(plane);
    });

    it("plane cannot take off if a plane is already flying", function(){
      expect(function(){plane.takeOff(heathrow);}).toThrow("Plane is flying, so cannot take off");
    });

  });

});
