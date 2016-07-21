import { Meteor } from 'meteor/meteor';
import mpg from 'meteor-pg';

Meteor.publish('allPlayers', function() {
  let sql = 'SELECT id AS _id, * FROM players ORDER BY score DESC';

  // Trigger any change
  return mpg.select('players', sql, function(trig) { return true });
});


Meteor.publish('playerScore', function(name) {
  // Get the score of a particular player.
  // Use a trigger so only changes to that player are tracked.

  let sql = 'SELECT id as _id, name, score FROM players WHERE name = $1';

  return mpg.select('playerScore', sql, [ name ],
    {
      players: function(trig) {
        return trig.row.name === name;
      }
    }
  );
});
