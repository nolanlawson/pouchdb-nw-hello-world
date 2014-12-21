PouchDB + Node-Webkit "Hello world"
=======================

Simple "Hello World" app with [node-webkit](https://github.com/rogerwang/node-webkit)
and [PouchDB](http://pouchdb.com). All it does it check that we can have a PouchDB backed by:

* IndexedDB (the default)
* WebSQL (alternative)
* LevelDB (using Node)

![Hello world screenshot](https://raw.githubusercontent.com/nolanlawson/node-webkit-pouchdb-demo/master/screenshot.png)

Usage
-----

Just download the source code and run:

```
npm install
npm start
```

That's it!

Caveats
-------

**This only works in Node 0.10, not Node 0.11.**

Also, I am using a prerelease version of PouchDB that may make it into version 3.2.1.
See [PouchDB issue #3229 ](https://github.com/pouchdb/pouchdb/issues/3229) for details

Also, in order to get this working in LevelDB, you have to recompile using `nw-gyp`. I figured out how to get this to work,
and if you check out the `postinstall.sh` script, you can learn too. Thanks to [cozy-desktop](https://github.com/cozy-labs/cozy-desktop/blob/master/gulpfile.js)
for pointing me in the right direction.