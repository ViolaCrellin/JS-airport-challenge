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
  });

  describe("#takeOff", function(){
    it("changes plane's status to flying", function(){
      plane.takeOff(heathrow);
      expect(plane.status).toEqual('flying');
    });

    it("instructs airport to add plane to loadin bay", function(){
      plane.takeOff(heathrow);
      expect(heathrow.removeFromLoadingBay).toHaveBeenCalledWith(plane);
    });

  });

});
