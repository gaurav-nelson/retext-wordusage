/**
 * @author Gaurav Nelson
 * @license MIT
 * @module retext:wordusage
 * @fileoverview Word usage advice pertinent to technical writing.
 */

'use strict';

/* Dependencies. */
var keys = require('object-keys');
var difference = require('lodash.difference');
var nlcstToString = require('nlcst-to-string');
var quotation = require('quotation');
var search = require('nlcst-search');
var position = require('unist-util-position');
var patterns = require('./index.json');

/* Expose. */
module.exports = wordusage;

/* List of all phrases. */
var list = keys(patterns);

function wordusage(options) {
    var ignore = (options || {}).ignore || [];
    var phrases = difference(list, ignore);

    return transformer;

    function transformer(tree, file) {
        search(tree, phrases, finder);

        function finder(match, index, parent, phrase) {
            var pattern = patterns[phrase];
            var replace = pattern.replace;
            var value = nlcstToString(match);
            var quoted = quotation(value, '“', '”');
            var data = pattern.data;
            var reason;
            var message;

            if (!replace.length) {
                if (pattern.omit) {
                    reason = data[0] + ' Remove ' + quotation(value);
                } else {
                    reason = data[0];
                }
            } else {
                //if (pattern.omit) {
                // reason = 'Replace ' + value + ' with ' + quotation(replace, '“', '”').join(', ') + '.';
                //  } else {
                reason = data[0] + ' Replace with ' + quotation(replace, '“', '”').join(', ') + '.';
                // }
            }

            message = file.warn(reason, {
                start: position.start(match[0]),
                end: position.end(match[match.length - 1])
            });

            message.ruleId = phrase.replace(/\s+/g, '-').toLowerCase();
            message.source = 'retext-wordusage';
            message.actual = value;
            message.expected = replace;
        }
    }
}