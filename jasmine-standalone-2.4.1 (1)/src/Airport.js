function Airport() {
  this.loadingBay = [];
}

Airport.prototype.addToLoadingBay = function(plane){
  this.loadingBay.push(plane);
};
