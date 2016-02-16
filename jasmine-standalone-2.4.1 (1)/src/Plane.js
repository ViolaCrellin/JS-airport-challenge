function Plane() {
  this.status = 'flying';
}

Plane.prototype.land = function(airport){
  this.status = 'landed';
  airport.addToLoadingBay(this);
};
