function Airport() {
  this.loading_bay = [];
}

Airport.prototype.land = function(plane){
  this.loading_bay.push(plane);
};
