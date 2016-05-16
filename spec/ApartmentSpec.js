describe("Apartment", function() {
  var apartment, room1, room2, room3;

  beforeEach(function() {
    room1 = new Room("bedroom", 150);
    room2 = new Room("lounge", 250);
    room3 = new Room("kitchen", 120);
    apartment = new Apartment("2A", [room1, room2, room3]);
  });


  it("has a number", function() {
    expect(apartment.number).toEqual("2A");
  });

  it("has rooms", function() {
    expect(apartment.rooms).toEqual([room1,room2,room3]);
  });  

  it("calculates total sqft", function() {
    expect(apartment.totalSqft()).toEqual(520);
  });
});