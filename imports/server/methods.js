import { Meteor } from 'meteor/meteor';

import mpg from 'meteor-pg';

Meteor.methods({
  'incScore': function(id, amount){
    // Validate arguments

    check(id, Number);
    check(amount, Number);

    // Perform query

    let sql = `
      -- uncomment sleep to test latency compensation
      -- SELECT pg_sleep(0.5);

      UPDATE players
      SET score = score + $[amount]
      WHERE id = $[id]
    `;

    mpg.none(sql, { id, amount });
  }
});
