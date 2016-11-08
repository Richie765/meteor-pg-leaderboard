import { Meteor } from 'meteor/meteor';

import mpg from '@richie765/meteor-pg';

Meteor.publish('allPlayers', function() {
  let sql = 'SELECT id AS _id, * FROM players ORDER BY score DESC';

  function triggers() {
    return true;
  }

  return mpg.select('players', sql, undefined, triggers);
});


Meteor.publish('playerScore', function(name) {
  // Get the score of a particular player.
  // Use a trigger so only changes to that player are tracked.

  let sql = 'SELECT id as _id, name, score FROM players WHERE name = $[name]';

  function triggers({ table, row }) {
    if(table === 'players' && row.name === name) return true;
  }

  return mpg.select('playerScore', sql, { name }, triggers);
});
