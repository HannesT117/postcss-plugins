"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require('assert');
const plugin = require('postcss-preset-env');
plugin({ preserve: true });
assert.ok(plugin.postcss, 'should have "postcss flag"');
assert.equal(typeof plugin, 'function', 'should return a function');
