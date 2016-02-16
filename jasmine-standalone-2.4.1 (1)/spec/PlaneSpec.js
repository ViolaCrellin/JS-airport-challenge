describe ("Plane", function (){

  var plane

  beforeEach(function(){
    plane = new Plane()
  });

  describe("#status", function(){
    it ("has a deafult status of flying", function(){
      expect(plane.status).toEqual('flying')
    });
  });
});
