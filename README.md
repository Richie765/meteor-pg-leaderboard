# PostgreSQL Leaderboard Example

The familiar Meteor Leaderboard example modified to use a PostgreSQL backend, reactively!

## Quick start

### Using Embedded PostgreSQL Server

NOTE Starting with Meteor 1.3.5.1 the numtel:pg-server seems not to work anymore.

The [`numtel:pg-server` Meteor Package](https://github.com/numtel/meteor-pg-server)
can be used to embed a PostgreSQL server into your Meteor application, just as Mongo
is embedded by default. At this time there is not yet Windows support but Linux (32
and 64 bit) as well as Mac OSX are supported.

When using `numtel:pg-server`, the configuration settings will be read from
`leaderboard.pg.json`.

```bash
git clone https://github.com/richie765/meteor-pg-live
cd meteor-pg-live/examples/leaderboard
meteor npm install
meteor
```

For more details see [the leaderboard example README](https://github.com/Richie765/meteor-pg-live/tree/master/examples/leaderboard).

### Using Externally Configured PostgreSQL Server

This example requires a PostgresSQL server of version at least 9.3.

```bash
git clone https://github.com/richie765/meteor-pg-live
cd meteor-pg-live/examples/leaderboard

# Import sample tables and data into default database (postgres)
psql postgres < leaderboard.sql

# Update database connection settings in your favorite editor (line 75)
export PG_URL=postgres://user:password@host:port/db

meteor npm install
meteor
```
