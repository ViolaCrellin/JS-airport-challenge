function Plane() {
  this.status = 'flying';
}

Plane.prototype.land = function(airport){
    if (this.status === 'landed' ) {
      throw "Plane is not flying, so cannot land";
    } else {
      this.status = 'landed';
    airport.addToLoadingBay(this);
    }
};

Plane.prototype.takeOff = function(airport){
  if (this.status === 'flying') {
    throw "Plane is flying, so cannot take off";
  } else {
    this.status = 'flying';
  airport.removeFromLoadingBay(this);
  }
};
