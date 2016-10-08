# Correct way to install in development

Leaderboard

```bash
rm -rf node_modules
meteor npm install ~/develop/github/pg-live-select
meteor npm install ~/develop/github/meteor-pg
rm -rf node_modules/meteor-pg/node_modules/pg-live-select
```

Using symlinks
```bash
cd node_modules
rm -rf meteor-pg
ln -s ~/develop/github/meteor-pg
```
