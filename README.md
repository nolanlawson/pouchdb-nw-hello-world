PouchDB NW.js "Hello world" app
=======================

Simple "Hello World" app with [NW.js](https://github.com/rogerwang/node-webkit)
and [PouchDB](http://pouchdb.com). All it does it check that we can have a PouchDB backed by:

* IndexedDB (browser default)
* WebSQL (browser alternative)
* LevelDB (using Node)

Usage
-----

Just download the source code and run:

```
npm install
npm start
```

That's it! You should see:

![Hello world screenshot](https://raw.githubusercontent.com/nolanlawson/node-webkit-pouchdb-demo/master/screenshot.png)

nw-gyp tricks
-------

Also, in order to get this working in LevelDB, you have to recompile leveldown using `nw-gyp`. I figured out how to get this to work,
and if you check out the `postinstall` script in `package.json`, you can learn too. (Because it's a `postinstall` script, it will actually do it automatically when you `npm install`.)

Thanks to [cozy-desktop](https://github.com/cozy-labs/cozy-desktop/blob/master/gulpfile.js)
for pointing me in the right direction.
