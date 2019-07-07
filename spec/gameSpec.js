
describe("Game", function() {
  let game;

  beforeEach(function(){
    game = new Game();
  });

  it("sums up gutter game", function(){
    var roll;
    for (roll=1; roll < 20; roll++) {
      game.roll();
    }
    expect(game.gutterGame()).toEqual(0);
  });

  it("sums up perfect game", function() {
    var roll;
    for (roll=1; roll < 12; roll ++) {
      game.roll();
    }
    expect(game.perfectGame()).toEqual(300);
  })

//   it("has two scores in frames from 1 to 9", function() {
//     expect(game.countCapacityInFirst9Frames().length).toEqual(2);
//   });
//
//   it("has three scores in frame 10", function() {
//     expect(game.countCapacityInFrame10().length).toEqual(3);
//   });
//
//   it("returns a sum of the first score", function() {
//     expect(game.sumScoresInRound1()).toEqual(6);
//   });
// ////already here i should have the code for spare
//   it("returns a sum of the second score", function() {
//     expect(game.sumScoresInRound2()).toEqual(12);
//   });



});
