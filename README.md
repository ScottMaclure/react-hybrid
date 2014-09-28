# react-hybrid

## Goals

* Render ReactJS on server and/or client. Avoid any other kind of templating, do as much in ReactJS as possible.

## Setup + Install

```
npm install
npm start
```

**Note:** nodemon will automatically restart if you change server.js, or any js/json file. See package.json for command.

Some test URLs:

<http://localhost:7000/>

<http://localhost:7000/mirror/happy>

<http://localhost:7000/hello/Jupiter>

<http://localhost:7000/helloPlanets/Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune>

## Running on maclure.com.au server

`forever start server.js`

<http://react-hybrid.maclure.com.au/helloPlanets/Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune>

## Technology Stack

* git, github
* nodejs + npm
* express, connect middleware, consolidate?
* nodemon
* browserify
* ReactJS

## Notes

Should we add ReactJS to consolidate?

https://github.com/visionmedia/consolidate.js