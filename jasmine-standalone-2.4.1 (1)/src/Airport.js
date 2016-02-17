var CAPACITY = 10;

function Airport(weather, capacity) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this.loadingBay = [];
  this.capacity = typeof capacity !== 'undefined' ? capacity : CAPACITY;
}

Airport.prototype.addToLoadingBay = function(plane){
  if (this.capacity <= this.loadingBay.length) {
    throw "No space in loading bay";
} else if (this._weather.isStormy() === true) {
    throw "Too stormy to land";
  } else {
  this.loadingBay.push(plane);
  }
};

Airport.prototype.removeFromLoadingBay = function(plane){
  if (this.loadingBay.length === 0 ) {
    throw "No planes available";
  } else if (this._weather.isStormy() === true) {
    throw "Too stormy for takeoff";
    } else {
    this.loadingBay.pop(plane);
  }
};
