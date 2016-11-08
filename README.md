# PostgreSQL Leaderboard Example

The familiar Meteor Leaderboard example modified to use a PostgreSQL backend, reactively!

# Quick start

This demonstrates the use of https://github.com/Richie765/meteor-pg.

Requires PostgresSQL version 9.3 or above.

```bash
# Installation

git clone https://github.com/Richie765/meteor-pg-leaderboard
cd meteor-pg-leaderboard

# Import sample tables and data into default database (postgres)

psql postgres < leaderboard.sql

# Run it

meteor npm install
PG_URL=postgres://localhost/postgres meteor run
```
