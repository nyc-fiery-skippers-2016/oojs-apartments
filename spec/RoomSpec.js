describe("Room", function() {
  var room;

  beforeEach(function() {
    room = new Room("bedroom", 150);
  });


  it("has a name", function() {
    expect(room.name).toEqual("bedroom");
  });

  it("has sqft", function() {
    expect(room.sqft).toEqual(150);
  });
});