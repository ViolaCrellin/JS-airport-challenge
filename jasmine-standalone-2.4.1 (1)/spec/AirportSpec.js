describe("Airport", function() {

  var heathrow;
  var plane;
  var weather;



  beforeEach(function() {
    plane = 'bowing 747';
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    spyOn(Math, 'random').and.returnValue(1);
    heathrow = new Airport(weather);
  });

    describe("#constructor function", function(){

      it("should have an empty loading bay when created" , function(){
        expect(heathrow.loadingBay).toEqual([]);
      });

    });

    describe("#addToLoadingBay", function(){

      it("adds a plane to the loading bay", function(){
        heathrow.addToLoadingBay(plane);
        expect(heathrow.loadingBay).toContain('bowing 747');
      });

      it("will raise an error if too many planes in holding bay", function(){
        var capacity = 2;
        var smallHeathrow = new Airport(weather, capacity);
        smallHeathrow.addToLoadingBay(plane);
        smallHeathrow.addToLoadingBay(plane);
        expect(function(){smallHeathrow.addToLoadingBay(plane);}).toThrow("No space in loading bay");
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
    });


    describe("#removeFromLoadingBay in different weather conditions", function(){

      beforeEach(function() {
        plane = 'bowing 747';
        // badweather = jasmine.createSpyObj('weather', ['isStormy']);
        // spyOn(Math, 'random').and.returnValue(0);
        stormyHeathrow = new Airport();
      });


      it("will raise an error if too stormy for take off", function(){
        stormyHeathrow.addToLoadingBay(plane);
        stormyHeathrow.addToLoadingBay(plane);
        spyOn(stormyHeathrow._weather, 'isStormy').and.returnValue(true);
        expect(function(){stormyHeathrow.removeFromLoadingBay(plane);}).toThrow("Too stormy for takeoff");
      });
    });

    describe("#addToLoadingBay in different weather conditions", function(){


      it("will raise an error if too stormy for take off", function(){
        spyOn(stormyHeathrow._weather, 'isStormy').and.returnValue(true);
        expect(function(){stormyHeathrow.addToLoadingBay(plane);}).toThrow("Too stormy to land");
      });


    });

});
