(function () {
  'use strict';
  
  var idb = document.getElementById('idb');
  var websql = document.getElementById('websql');
  var leveldb = document.getElementById('leveldb');

  // indexeddb  
  new PouchDB('using-idb').info().then(function () {
    idb.innerHTML = '&#10003';
  }).catch(function (err) {
    idb.innerHTML = "Nope, got an error: " + err;
  });
 
  // websql 
  new PouchDB('using-websql', {adapter: 'websql'}).info().then(function () {
    websql.innerHTML = '&#10003';
  }).catch(function (err) {
    websql.innerHTML = "Nope, got an error: " + err;
  });

  // leveldb 
  var LevelPouchDB = require('pouchdb');
  new LevelPouchDB('using-leveldb').info().then(function () {
    leveldb.innerHTML = '&#10003';
  }).catch(function (err) {
    leveldb.innerHTML = "Nope, got an error: " + err;
  });
})();
