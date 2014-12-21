#!/usr/bin/env bash

nwVersion='0.8.6';

cd node_modules/pouchdb/node_modules/leveldown

nwGyp=../../../.bin/nw-gyp

$nwGyp configure --target=$nwVersion
$nwGyp build

cd ../../../..
