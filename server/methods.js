import { Meteor } from 'meteor/meteor';
import mpg from 'meteor-pg';

Meteor.methods({
  'incScore': function(id, amount){
    // Validate arguments

    check(id, Number);
    check(amount, Number);

    // Perform query

    let sql = `
      -- SELECT pg_sleep(0.5);
      UPDATE players
      SET score = score + $1
      WHERE id = $2
    `;

    mpg.none(sql, [ amount, id ]);
  }
});