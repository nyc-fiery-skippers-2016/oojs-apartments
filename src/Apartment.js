function Apartment(number, rooms) {
  this.number = number;
  this.rooms = rooms || [];
}

Apartment.prototype.totalSqft = function() {
  return this.rooms.reduce(function(sum, room) { return room.sqft + sum }, 0)
}
